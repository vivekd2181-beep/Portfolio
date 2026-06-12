import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Phone, Share2, Link2 } from 'lucide-react';

export const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const introPhrases = [
    'Java Full Stack Developer',
    'ECE Graduate',
    'Embedded System',
  ];
  
  useEffect(() => {
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timer: any;

    const handleType = () => {
      const currentPhrase = introPhrases[phraseIdx];
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, charIdx - 1));
        charIdx--;
      } else {
        setTypedText(currentPhrase.substring(0, charIdx + 1));
        charIdx++;
      }

      let speed = isDeleting ? 30 : 85;

      if (!isDeleting && charIdx === currentPhrase.length) {
        speed = 2200; // Hold at complete phrase
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % introPhrases.length;
        speed = 500; // Pause before next phrase
      }

      timer = setTimeout(handleType, speed);
    };

    timer = setTimeout(handleType, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero relative min-h-screen flex items-center justify-center dark:bg-[#0C0C0C] bg-white transition-colors duration-300 pt-24 pb-16 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[120px]" />
        <div className="absolute inset-0 grid-bg opacity-30 dark:opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Side Info column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:w-3/5 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2 w-full"
          >
            <span className="text-blue-500 dark:text-[#12f7ff] uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold">
              Hi! I'm
            </span>
            <h1 className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-950 dark:text-white leading-[1.1]">
              VIVEK D.
            </h1>
            <div className="min-h-[2rem] flex items-center justify-center lg:justify-start mt-2">
              <p className="hero-intro typing-effect text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-[#12f7ff] drop-shadow-[0_0_8px_rgba(0,245,255,0.15)]">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex flex-col gap-3 w-full"
          >
            <h3 className="text-xs uppercase tracking-wider text-gray-400 dark:text-white/40 font-semibold text-left lg:text-left">Professional Summary</h3>
            <p className="text-gray-650 dark:text-gray-300 text-sm sm:text-base leading-relaxed text-justify lg:text-left">
              Passionate Electronics and Communication Engineering graduate with expertise in Java, Spring Boot, SQL, Python, Embedded Systems, and IoT. Focused on building scalable applications and solving real-world problems.
            </p>
          </motion.div>

          {/* Skill Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start w-full"
          >
            {['Java Full Stack', 'Spring Boot', 'SQL', 'Python', 'Embedded Systems', 'IoT'].map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 text-xs font-semibold bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/15 text-blue-600 dark:text-[#12f7ff] rounded-full hover:scale-105 transition-transform duration-200"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-xl mt-2"
          >
            <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 hover:border-blue-500/30 transition-colors duration-300">
              <span className="text-2xl filter drop-shadow">📍</span>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 dark:text-white/35 uppercase tracking-wider font-semibold">Location</p>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Bengaluru, India</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 hover:border-blue-500/30 transition-colors duration-300">
              <span className="text-2xl filter drop-shadow">💼</span>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 dark:text-white/35 uppercase tracking-wider font-semibold">Focus</p>
                <p className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">Java Full Stack Development</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 sm:col-span-2 hover:border-blue-500/30 transition-colors duration-300">
              <span className="text-2xl filter drop-shadow">📧</span>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 dark:text-white/35 uppercase tracking-wider font-semibold">Email Address</p>
                <a href="mailto:vivekbharadwaj05@gmail.com" className="text-xs sm:text-sm font-semibold text-blue-500 hover:text-blue-400 hover:underline transition-colors duration-200">
                  vivekbharadwaj05@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start w-full mt-4"
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Resume PDF download link can be connected here!");
              }}
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-blue-500/15 hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Download Resume
            </a>
            <button
              onClick={() => handleScrollToSection('projects')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-gray-300 dark:border-white/10 hover:border-blue-500 dark:hover:bg-white/5 text-gray-700 dark:text-white font-semibold hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              View Projects
            </button>
            <button
              onClick={() => handleScrollToSection('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-gray-300 dark:border-white/10 hover:border-blue-500 dark:hover:bg-white/5 text-gray-700 dark:text-white font-semibold hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex items-center gap-4 mt-4"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-650 dark:text-white/60 hover:text-blue-500 dark:hover:text-[#12f7ff] hover:border-blue-500 transition-all duration-300"
              aria-label="GitHub"
            >
              <Share2 size={18} />
            </a>
            <a
              href="https://linkedin.com/in/vivek-d-7821a8379"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-650 dark:text-white/60 hover:text-blue-500 dark:hover:text-[#12f7ff] hover:border-blue-500 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Link2 size={18} />
            </a>
            <a
              href="mailto:vivekbharadwaj05@gmail.com"
              className="w-10 h-10 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-650 dark:text-white/60 hover:text-blue-500 dark:hover:text-[#12f7ff] hover:border-blue-500 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:+919164928645"
              className="w-10 h-10 rounded-xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-650 dark:text-white/60 hover:text-blue-500 dark:hover:text-[#12f7ff] hover:border-blue-500 transition-all duration-300"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Side Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lg:w-2/5 w-full flex items-center justify-center shrink-0 relative"
        >
          {/* Subtle Floating Wrapper */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-72 h-96 sm:w-80 sm:h-[420px] md:w-96 md:h-[480px]"
          >
            {/* Soft Blue Glow behind the photo */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-500/20 blur-3xl opacity-60 dark:opacity-75 pointer-events-none" />

            {/* Premium Container with border */}
            <div className="w-full h-full rounded-[2rem] overflow-hidden border border-gray-250 dark:border-white/10 shadow-2xl relative bg-[#0C0C0C]">
              <img
                src="/profile.jpg"
                alt="Vivek D."
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay shadow gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>

      </div>

      <motion.button
        onClick={() => handleScrollToSection('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hover:text-blue-500 dark:hover:text-[#12f7ff] text-gray-400 dark:text-white/40 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs uppercase tracking-[0.25em] font-medium">Scroll Down</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
};
