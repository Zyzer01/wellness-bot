import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="flex items-center gap-2">
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
