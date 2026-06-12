import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Intro = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return Math.min(prev + step, 100);
      });
    }, intervalTime);
    return () => clearInterval(timer);
  }, [onComplete]);

  const getProgressText = () => {
    if (progress < 34) return 'Launching creativity...';
    if (progress < 67) return 'Designing possibilities...';
    return 'Going global...';
  };

  const getIcon = () => {
    if (progress < 34) return '🚀';
    if (progress < 67) return '🎨';
    return '🌐';
  };

  return (
    <motion.div
      className="fixed inset-0 bg-[#0C0C0C] z-[9999] flex flex-col items-center justify-center p-6 select-none"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-4xl md:text-7xl font-light text-white mb-12 tracking-[0.2em] uppercase text-center"
      >
        Welcome to <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">My World</span>
      </motion.h1>
      
      <div className="intro-progress flex flex-col items-center gap-4 w-full max-w-xs sm:max-w-sm">
        <div className="progress-track w-full h-[3px] bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            className="progress-bar h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex items-center gap-3 mt-2">
          <motion.span 
            className="text-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {getIcon()}
          </motion.span>
          <span className="progress-text text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8A929B] font-medium min-w-[200px] text-left">
            {getProgressText()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
