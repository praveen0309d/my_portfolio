function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full p-2 shadow hover:scale-105 transition-transform"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}

export default DarkModeToggle;
