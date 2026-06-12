import { FadeIn } from './ui';

export const Footer = () => (
  <footer className="relative border-t border-gray-200 dark:border-white/10 py-8 bg-white dark:bg-[#0C0C0C] transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <FadeIn>
        <p className="text-gray-500 dark:text-white/60 text-xs sm:text-sm uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Vivek D. All rights reserved.
        </p>
      </FadeIn>
    </div>
  </footer>
);
