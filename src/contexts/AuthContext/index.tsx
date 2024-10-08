import { createContext, useState, useEffect } from "react";

import { User } from "firebase/auth";
import {
  googleSignIn as googleSignInService,
  recoverPassword as recoverPasswordService,
  signInUser as signInUserService,
  signOutUser as signOutUserService,
  signUpUser as signUpUserService,
  userStateListener,
} from "../../firebase/authService";

type AuthProviderProps = {
  children?: React.ReactNode;
};

type AuthContextType = {
  currentUser: User | null;
  googleSignIn: () => void;
  recoverPassword: (email: string) => void;
  setCurrentUser: (user: User | null) => void;
  signInUser: (email: string, password: string) => void;
  signOutUser: () => void;
  signUpUser: (email: string, password: string) => void;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: {} as User | null,
  googleSignIn: () => {},
  recoverPassword: () => {},
  setCurrentUser: () => {},
  signInUser: () => {},
  signOutUser: () => {},
  signUpUser: () => {},
});

const getStoredUser = () => {
  const storedUser = localStorage.getItem("currentUser");
  return storedUser ? JSON.parse(storedUser) : null;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(getStoredUser);

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        setCurrentUser(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
      } else {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
      }
    });

    return unsubscribe;
  }, [setCurrentUser]);

  const googleSignIn = async () => {
    try {
      googleSignInService();
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const recoverPassword = async (email: string) => {
    try {
      await recoverPasswordService(email);
    } catch (error) {
      console.error("Error recovering password:", error);
    }
  };

  const signInUser = async (email: string, password: string) => {
    try {
      await signInUserService(email, password);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const signOutUser = async () => {
    try {
      signOutUserService();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const signUpUser = async (email: string, password: string) => {
    try {
      await signUpUserService(email, password);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        googleSignIn,
        recoverPassword,
        setCurrentUser,
        signInUser,
        signOutUser,
        signUpUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
