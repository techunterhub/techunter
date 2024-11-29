"use client";
import HomePage from "./components/Main";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Techunter";
  })
  return (
   <>
   <HomePage />
   </>
  );
}
