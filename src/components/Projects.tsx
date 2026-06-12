import { motion } from 'framer-motion';
import { FadeIn, LiveProjectButton } from './ui';

const projects = [
  {
    title: 'AI-Powered Predictive Analytics Platform',
    category: 'Python · Scikit-learn · Flask · REST API · MySQL',
    desc: 'Engineered an end-to-end ML pipeline for customer churn prediction achieving 91% accuracy using Random Forest and XGBoost on 50,000+ records with feature engineering and hyperparameter tuning. Deployed a Flask REST API serving real-time predictions with <200ms response time; integrated MySQL backend.',
    gradient: 'from-purple-900/40 via-teal-900/30 to-purple-800/40',
    accent: '#8B5CF6',
    image: '/project_1.png',
    highlights: ['91% Accuracy', 'Flask REST API', '<200ms Response'],
  },
  {
    title: 'Employee Management System',
    category: 'Java · Spring Boot · Hibernate · MySQL · REST API',
    desc: 'Architected a full-stack CRUD enterprise application using Spring Boot and HTML/CSS/JavaScript following the MVC design pattern. Designed and exposed RESTful APIs (GET, POST, PUT, DELETE) with server-side validation and exception handling; optimized database interaction using Hibernate ORM.',
    gradient: 'from-blue-900/40 via-orange-900/20 to-blue-800/40',
    accent: '#3B82F6',
    image: '/project_2.png',
    highlights: ['Spring Boot', 'Hibernate ORM', '1000+ Test Cases'],
  },
  {
    title: 'RFID-Based Automated Fuel Dispensing',
    category: 'Arduino Uno · RFID RC522 · 16x2 LCD · Relay · Solenoid Valve · Embedded C',
    desc: 'Built a contactless vehicle authentication and fuel dispensing system using RFID RC522; registered RFID cards trigger a relay-controlled solenoid valve for automated, error-free fuel release. Implemented SPI communication, real-time balance display, and buzzer alarm.',
    gradient: 'from-emerald-900/40 via-cyan-900/30 to-teal-800/40',
    accent: '#10B981',
    image: '/project_3.png',
    highlights: ['Arduino Uno', 'RFID RC522', '100% Read Accuracy'],
  },
  {
    title: 'Smart Portfolio Website',
    category: 'React · TypeScript · Vite · Tailwind · Framer Motion',
    desc: 'A modern, high-performance portfolio website featuring glassmorphic UI cards, magnetic link animations, infinite marquee, and responsive layouts built with React, Vite, and Framer Motion.',
    gradient: 'from-pink-900/40 via-purple-900/30 to-fuchsia-800/40',
    accent: '#EC4899',
    image: '/project_4.png',
    highlights: ['React + TS', 'Vite & Tailwind', 'Framer Motion'],
  },
  {
    title: 'IoT-Based Accident Prevention and Automatic Speed Control in Winding/Hilly Roads',
    category: 'Arduino Uno · RF Module · Ultrasonic Sensors · L298N Motor Driver · Embedded C',
    desc: 'Engineered an automated safety system for blind curves and steep turns on winding/hilly roads. Integrated ultrasonic sensors to identify approaching vehicles on the opposite side of curves and RF modules to transmit speed reduction commands, dynamically controlling vehicle speed via L298N drivers to prevent head-on collisions.',
    gradient: 'from-orange-900/45 via-amber-900/30 to-red-900/40',
    accent: '#EF4444',
    image: '/project_5.png',
    highlights: ['Ultrasonic Sensors', 'RF Communication', 'L298N Speed Control'],
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <FadeIn delay={index * 0.15}>
    <motion.div
      className="group relative rounded-2xl overflow-hidden glass-card glow-border"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Actual Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
        />

        {/* Ambient Glow / Color overlay behind image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/40 to-transparent" />

        {/* Highlight chips */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {project.highlights.map((h) => (
            <span key={h} className="text-[10px] sm:text-xs font-medium text-white/90 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/5">{h}</span>
          ))}
        </div>

        <div className="absolute inset-0 bg-[#0C0C0C]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6 z-10">
          <LiveProjectButton className="text-xs sm:text-sm" />
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <span className="text-xs uppercase tracking-[0.15em] mb-2 block" style={{ color: project.accent }}>
          {project.category}
        </span>
        <h3 className="text-[#D7E2EA] text-lg sm:text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-[#8A929B] text-sm leading-relaxed">{project.desc}</p>
      </div>
    </motion.div>
  </FadeIn>
);

export const Projects = () => (
  <section id="projects" className="relative py-24 sm:py-32 lg:py-40 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <FadeIn>
        <p className="text-[#555] text-xs sm:text-sm uppercase tracking-[0.4em] mb-6">// Projects</p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-16">
          My Work
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);
