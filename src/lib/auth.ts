// lib/auth.ts
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from "./firebase";

export const signInWithGoogle = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
};
