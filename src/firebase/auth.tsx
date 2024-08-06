import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "./config";

export const _signInUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Successfully signed in");
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

export const _signUpUser = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Successfully signed up");
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

export const _signOutUser = async () => {
  try {
    await signOut(auth);
    console.log("Successfully signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export const userStateListener = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
