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
  signIn: (_email: string, _password: string) => {},
  signOut: () => {},
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

  const signUpUser = (email: string, password: string) => {
    _signUpUser(email, password);
    navigate("/workout");
  };

  const signInUser = (email: string, password: string) => {
    _signInUser(email, password);
    navigate("/workout");
  };

  const signOutUser = () => {
    _signOutUser();
    setCurrentUser(null);
    navigate("/");
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
