import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth, provider } from "./config";

export const googleSignIn = async () => {
  try {
    await signInWithPopup(auth, provider);
    console.log("Successfully signed in with Google");
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Successfully signed in");
  } catch (error) {
    console.error("Error signing in:", error);
  }
};

export const signUpUser = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("Successfully signed up");
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

export const signOutUser = async () => {
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
