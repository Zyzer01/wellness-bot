'use client'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="flex dark:text-white items-center gap-2">
      {theme === 'light' ? (
        <HiOutlineSun className="h-6 w-6" />
      ) : (
        <HiOutlineMoon className="h-6 w-6" />
      )}
      <span>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
  );
};

export default ThemeToggle;

