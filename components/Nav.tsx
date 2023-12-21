'use client'
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes"

export default function Navbar() {
  const { setTheme } = useTheme()
  return (
    <div>    
    <header className="h-15 w-full shadow-sm dark:border-gray-700">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="font-bold text-3xl dark:text-dark">
          <Link href="/">wellnessAI</Link>
        </h2>
        <div className="flex items-center space-x-2">
          {/* Add ThemeToggle component here */}
          {/* <ThemeToggle /> */}
          <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
      </div>
    </header>
    </div>
  );
}
