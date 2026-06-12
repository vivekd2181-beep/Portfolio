import { useEffect, useRef, useState } from 'react';
import { FadeIn } from './ui';
import { AnimatedText } from './AnimatedText';

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

const stats = [
  { value: 5, suffix: '+', label: 'Projects Completed' },
  { value: 6, suffix: 'mo', label: 'Professional Training' },
  { value: 6, suffix: '+', label: 'Technologies Mastered' },
  { value: 100, suffix: '%', label: 'RFID Read Accuracy' },
];

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center px-4 sm:px-6">
      <p className="text-3xl sm:text-4xl md:text-5xl font-bold hero-heading">{count}{suffix}</p>
      <p className="text-[#555] text-xs sm:text-sm uppercase tracking-[0.2em] mt-2">{label}</p>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <p className="text-[#555] text-xs sm:text-sm uppercase tracking-[0.4em] mb-6">// About Me</p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Photo on Left */}
          <div className="lg:w-2/5 w-full flex items-center justify-center">
            <FadeIn delay={0.2} x={-40} y={0} className="w-full">
              <div className="relative w-full max-w-sm aspect-[3/4] mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl group bg-[#0C0C0C]">
                <img
                  src="/profile_grad.jpg"
                  alt="Vivek D."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                {/* Fade from Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/40 to-transparent opacity-95 pointer-events-none" />
                {/* Fade from Top */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C]/20 to-transparent opacity-80 pointer-events-none" />
                {/* Fade from Left */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C] via-[#0C0C0C]/20 to-transparent opacity-80 pointer-events-none" />
                {/* Fade from Right */}
                <div className="absolute inset-0 bg-gradient-to-l from-[#0C0C0C] via-[#0C0C0C]/20 to-transparent opacity-80 pointer-events-none" />
              </div>
            </FadeIn>
          </div>

          {/* Text on Right */}
          <div className="lg:w-3/5 w-full">
            <FadeIn delay={0.3}>
              <h2 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">
                About Me
              </h2>
            </FadeIn>

            <AnimatedText
              text="I am Vivek D, a Bachelor of Engineering graduate in Electronics and Communication Engineering from RR Institute of Technology, Bengaluru. With a strong foundation in electronics and software development, I am passionate about leveraging technology to solve real-world challenges and create impactful solutions."
              className="text-[#8A929B] text-base sm:text-lg leading-relaxed max-w-xl"
            />

            <FadeIn delay={0.45}>
              <p className="text-[#8A929B] text-base sm:text-lg leading-relaxed max-w-xl mt-6">
                My technical expertise includes Java, Spring Boot, SQL, Python, web technologies, and fundamental electronics concepts such as digital systems, communication networks, and embedded technologies. Through academic projects, technical training, and continuous learning, I have developed strong analytical, problem-solving, and software development skills.
              </p>
            </FadeIn>

            <FadeIn delay={0.55}>
              <p className="text-[#8A929B] text-base sm:text-lg leading-relaxed max-w-xl mt-6">
                I am a motivated and adaptable engineering graduate seeking opportunities to contribute to innovative projects, expand my technical knowledge, and build a successful career in both software and electronics-related domains.
              </p>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-20 sm:mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
