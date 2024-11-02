"use client";

import Link from "next/link";

import { useRouter } from "next/navigation";
import { logout, signInWithGoogle } from "../lib/auth";
import { useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "firebase/auth";
import { ChevronDown } from "lucide-react";

export const Nav = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (firebaseUser) => {
        setUser(firebaseUser);
      },
      (error) => {
        setError(error);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <nav className="space-x-6 flex items-center">
      <Link href="#contact" className="text-sm hover:underline">
        Contact
      </Link>
      <Link href="/privacy-policy" className="text-sm hover:underline">
        Privacy Policy
      </Link>
      {!error && <SignInButton user={user} />}
    </nav>
  );
};

const SignInButton = ({ user }: { user: User | null }) => {
  const router = useRouter();

  if (user) {
    return (
      <div className="relative">
        <button
          type="button"
          className="flex items-center gap-2 text-sm hover:underline"
          id="user-dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={() => {
            const dropdown = document.getElementById("user-dropdown-content");
            dropdown?.classList.toggle("hidden");
          }}
        >
          {user.photoURL ? (
            <Avatar className="w-8 h-8">
              <AvatarImage
                src={user.photoURL}
                className="rounded-[24px]"
                alt="user image"
              />
              <AvatarFallback>Sub</AvatarFallback>
            </Avatar>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-white">
                {user.displayName?.slice(0, 1)}
              </span>
            </div>
          )}
          <span className="hidden md:inline-block truncate max-w-[100px]">
            {user.displayName || user.email}
          </span>
          <ChevronDown className="h-5 w-5" />
        </button>
        <div
          id="user-dropdown-content"
          className="hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
          role="menu"
          aria-labelledby="user-dropdown"
        >
          <Link href="/dashboard" className="block px-4 py-2 text-sm">
            Dashboard
          </Link>
          <button
            type="button"
            className="block w-full px-4 py-2 text-sm text-left"
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      className="hidden md:inline-block bg-white hover:bg-gray-100 border border-gray-200 rounded-lg text-sm px-4 py-2 cursor-pointer shadow-sm transition-colors duration-150"
      onClick={signInWithGoogle}
    >
      <div className="flex items-center gap-2">
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span className="text-gray-700">Sign in with Google</span>
      </div>
    </button>
  );
};
