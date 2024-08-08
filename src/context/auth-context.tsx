import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  _signUpUser,
  _signInUser,
  _signOutUser,
  userStateListener,
} from "../firebase/auth";
import { createContext, useState, useEffect, ReactNode } from "react";

type AuthProviderProps = {
  children?: ReactNode;
};

export const AuthContext = createContext({
  currentUser: {} as User | null,
  setCurrentUser: (_user: User) => {},
  signUpUser: (_email: string, _password: string) => {},
  signInUser: (_email: string, _password: string) => {},
  signOutUser: () => {},
});

const getStoredUser = () => {
  const storedUser = localStorage.getItem("currentUser");
  return storedUser ? JSON.parse(storedUser) : null;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(getStoredUser);
  const navigate = useNavigate();

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
      await _signUpUser(email, password);
      navigate("/workout");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const signInUser = async (email: string, password: string) => {
    try {
      await _signInUser(email, password);
      navigate("/workout");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const signOutUser = async () => {
    try {
      _signOutUser().then(() => {
        setCurrentUser(null);
        navigate("/");
      });
    } catch (error) {
      console.error("Error signing out:", error);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
