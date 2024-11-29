"use client";
import HomePage from "@/components/Home/Main";
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
