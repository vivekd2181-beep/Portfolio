import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedCharacter = ({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: any;
}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to maintain layout */}
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      {/* Animated character */}
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={ref} className={`relative ${className}`}>
      {characters.map((char, i) => (
        <AnimatedCharacter
          key={i}
          char={char}
          index={i}
          total={characters.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
};
