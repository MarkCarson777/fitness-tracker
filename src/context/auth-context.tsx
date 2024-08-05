import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signOutUser, userStateListener } from "../firebase/auth";
import { createContext, useState, useEffect, ReactNode } from "react";

type AuthProviderProps = {
  children?: ReactNode;
};

export const AuthContext = createContext({
  currentUser: {} as User | null,
  setCurrentUser: (_user: User) => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });

    return unsubscribe;
  }, [setCurrentUser]);

  const signOut = () => {
    signOutUser();
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
