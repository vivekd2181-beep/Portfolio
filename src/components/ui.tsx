import { motion } from 'framer-motion';
import { useRef, useEffect, type ReactNode } from 'react';

/* ─── FadeIn ─── */
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
}: FadeInProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

/* ─── Magnet ─── */
interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet = ({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const dist = Math.sqrt(distX * distX + distY * distY);
      const maxDist = Math.max(rect.width, rect.height) / 2 + padding;

      if (dist < maxDist) {
        const moveX = distX / strength;
        const moveY = distY / strength;
        el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        el.style.transition = activeTransition;
      } else {
        el.style.transform = 'translate3d(0, 0, 0)';
        el.style.transition = inactiveTransition;
      }
    };

    const handleMouseLeave = () => {
      el.style.transform = 'translate3d(0, 0, 0)';
      el.style.transition = inactiveTransition;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

/* ─── ContactButton ─── */
export const ContactButton = ({ className = '' }: { className?: string }) => {
  return (
    <a
      id="contact-button"
      href="mailto:vivekbharadwaj05@gmail.com"
      className={`inline-block rounded-full font-medium uppercase tracking-widest text-white
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base
        cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200 ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </a>
  );
};

/* ─── LiveProjectButton ─── */
export const LiveProjectButton = ({ className = '' }: { className?: string }) => {
  return (
    <button
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
        font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer ${className}`}
    >
      Live Project
    </button>
  );
};
