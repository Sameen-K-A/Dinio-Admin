import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../contexts/theme-context";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="p-2 rounded-sm cursor-pointer hover:bg-accent transition-colors"
      type="button"
    >
      {theme === "dark" ? (
        <Moon className="w-5 h-5" strokeWidth={1.5} />
      ) : (
        <Sun className="w-5 h-5" strokeWidth={1.5} />
      )}
    </button>
  );
}