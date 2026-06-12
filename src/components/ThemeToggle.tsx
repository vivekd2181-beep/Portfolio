import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    const portfolioLoaded = localStorage.getItem('vivek_portfolio_loaded');
    if (!portfolioLoaded) {
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('vivek_portfolio_loaded', 'true');
    }
    const initialTheme = localStorage.getItem('theme') || 'dark';
    if (initialTheme === 'dark') {
      root.classList.add('dark');
      setIsDark(true);
    } else {
      root.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-50 w-12 h-12 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-gray-200/20 dark:border-white/10 flex items-center justify-center hover:bg-white/20 dark:hover:bg-white/10 transition-colors shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-gray-800 dark:text-white" />
      )}
    </motion.button>
  );
};
