// app/dashboard/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "../../lib/firebase";
import { logout } from "../../lib/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import WordReviewApp from "@/components/word-review";
import { Nav } from "@/components/nav";
import { Header } from "@/components/header";

interface Word {
  id: string;
  word: string;
  definition: string;
}

const Dashboard: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [newWord, setNewWord] = useState("");
  const [definition, setDefinition] = useState("");
  const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (!user) router.push("/");
  //   });
  //   fetchWords();
  //   return () => unsubscribe();
  // }, []);

  // const fetchWords = async () => {
  //   const querySnapshot = await getDocs(
  //     collection(db, `users/${auth.currentUser?.uid}/words`)
  //   );
  //   const wordData = querySnapshot.docs.map(
  //     (doc) => ({ id: doc.id, ...doc.data() } as Word)
  //   );
  //   setWords(wordData);
  // };

  // const addWord = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (auth.currentUser) {
  //     await addDoc(collection(db, `users/${auth.currentUser.uid}/words`), {
  //       word: newWord,
  //       definition,
  //     });
  //     setNewWord("");
  //     setDefinition("");
  //     fetchWords();
  //   }
  // };

  return (
    <main className="min-h-screen bg-purple-50 font-['Poppins',sans-serif] text-gray-800 px-4">
      <Header />
      <WordReviewApp />
    </main>
  );
};

export default Dashboard;
