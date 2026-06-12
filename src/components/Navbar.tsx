import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#services' },
  { label: 'Resume', href: '#resume' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-3 left-0 right-0 z-50 mx-auto max-w-7xl px-4 transition-all duration-500`}
    >
      <div
        className={`w-full rounded-2xl transition-all duration-500 px-6 py-4 flex items-center justify-between ${
          scrolled
            ? 'bg-white/90 dark:bg-black/80 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg select-none">
            VD
          </div>
          <a
            href="#"
            className="text-gray-900 dark:text-white text-xl font-semibold tracking-wider hover:text-blue-500 transition-colors"
          >
            VIVEK D.
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-gray-600 dark:text-white/80 hover:text-blue-500 dark:hover:text-blue-400 text-sm uppercase tracking-[0.15em] font-medium transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-800 dark:text-white hover:text-blue-500 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 rounded-2xl bg-white/95 dark:bg-black/95 border border-gray-200 dark:border-white/10 shadow-2xl p-6 flex flex-col gap-4 md:hidden backdrop-blur-2xl"
          >
            {navLinks.map((link, idx) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => handleLinkClick(link.href)}
                className="text-gray-800 dark:text-white/90 hover:text-blue-500 text-left text-lg font-medium tracking-[0.1em] uppercase py-2 border-b border-gray-100 dark:border-white/5"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
