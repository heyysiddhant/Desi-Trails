import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="border px-3 py-1 rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;