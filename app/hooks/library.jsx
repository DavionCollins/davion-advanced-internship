"use client";
import { useEffect, useState } from "react";

export function useLibrary() {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("my library");
    if (saved) setLibrary(JSON.parse(saved));
  }, []);

  const saveBook = (book) => {
    setLibrary((prev) => {
      const alreadySaved = prev.some((b) => b.id === book.id);
      if (alreadySaved) return prev;

      const updated = [...prev, book];
      localStorage.setItem("my library", JSON.stringify(updated));
      return updated;
    });
  };
  const removeBook = (bookId) => {
    setLibrary((prev) => {
      const updated = prev.filter((b) => b.id !== bookId);
      localStorage.setItem("my library", JSON.stringify(updated));
      return updated;
    });
  };

  const isSaved = (bookId) => library.some((b) => b.id === bookId);

  return { library, saveBook, removeBook, isSaved };
}
