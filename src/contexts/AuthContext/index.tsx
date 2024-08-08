import { User } from "firebase/auth";
import {
  signUpUser as signUpUserService,
  signInUser as signInUserService,
  signOutUser as signOutUserService,
  userStateListener,
  googleSignIn as googleSignInService,
} from "../../firebase/authService";
import { createContext, useState, useEffect, ReactNode } from "react";

type AuthProviderProps = {
  children?: ReactNode;
};

type AuthContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  signUpUser: (email: string, password: string) => void;
  signInUser: (email: string, password: string) => void;
  signOutUser: () => void;
  googleSignIn: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: {} as User | null,
  setCurrentUser: (user: User) => {},
  signUpUser: (email: string, password: string) => {},
  signInUser: (email: string, password: string) => {},
  signOutUser: () => {},
  googleSignIn: () => {},
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

  const signUpUser = async (email: string, password: string) => {
    try {
      await signUpUserService(email, password);
    } catch (error) {
      console.error("Error signing up:", error);
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

  const googleSignIn = async () => {
    try {
      googleSignInService();
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        signUpUser,
        signInUser,
        signOutUser,
        googleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
