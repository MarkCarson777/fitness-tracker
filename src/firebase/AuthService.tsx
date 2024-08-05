import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { firebaseAuth } from "./BaseConfig";

type LoginFormValues = {
  email: string;
  password: string;
};

type UserFormValues = {
  email: string;
  password: string;
};

// Required to stay logged in after user exits the browser or closes tab
setPersistence(firebaseAuth, browserLocalPersistence);

// Sign in
export const firebaseSignIn = async ({ email, password }: LoginFormValues) => {
  const response = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );

  return response;
};

// Sign up
export const firebaseSignUp = async ({ email, password }: UserFormValues) => {
  const response = await createUserWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );

  return response;
};

// Sign out
export const firebaseSignOut = async () => {
  await signOut(firebaseAuth);
};
