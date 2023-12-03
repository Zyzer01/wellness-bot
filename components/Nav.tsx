import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme } = useTheme();
  return (
    <div style={{ color: theme === 'light' ? 'black' : 'white' }}>
    <header className="h-15 w-full shadow-sm dark:border-gray-700 ">
      <div className="container px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="font-bold text-3xl dark:text-dark">
          <Link href="/">wellnessAI</Link>
        </h2>
        <div className="flex items-center space-x-2">
          {/* Add ThemeToggle component here */}
          <ThemeToggle />
        </div>
      </div>
    </header>
    </div>
  );
}
