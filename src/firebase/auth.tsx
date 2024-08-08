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

export const _googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    console.log("Successfully signed in with Google", token, user);
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};

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
