import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
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

export const recoverPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Successfully sent password recovery email");
  } catch (error) {
    console.error("Error recovering password:", error);
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

export const userStateListener = (callback: (user: User | null) => void) =>
  onAuthStateChanged(auth, callback);
