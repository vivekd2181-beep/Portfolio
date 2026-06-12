import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './ui';
import { Box, Palette, PenTool, Globe, Database, Cpu } from 'lucide-react';

const services = [
  {
    icon: Box,
    title: 'Java Full Stack Development',
    desc: 'Building scalable enterprise web applications using Core & Advanced Java, Spring Boot, Spring MVC, and Hibernate ORM following MVC architecture for clean separation of concerns.',
    tools: ['Java', 'Spring Boot', 'Hibernate', 'Spring MVC'],
  },
  {
    icon: Globe,
    title: 'Frontend Development',
    desc: 'Creating responsive, interactive user interfaces with modern frontend technologies. Proficient in React.js, HTML5, CSS3, JavaScript (ES6+), and Bootstrap for clean layouts.',
    tools: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    icon: Palette,
    title: 'AI & Machine Learning',
    desc: 'Designing and deploying end-to-end ML pipelines for predictive analytics, achieving 91% accuracy with XGBoost and Random Forest. Experience in data preprocessing, feature engineering, and Pandas/NumPy.',
    tools: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'],
  },
  {
    icon: PenTool,
    title: 'REST API Design',
    desc: 'Architecting secure, high-performance RESTful APIs (GET, POST, PUT, DELETE) with proper endpoint design, request validation, exception handling, and testing via Postman.',
    tools: ['REST APIs', 'Spring Boot', 'Flask', 'Postman'],
  },
  {
    icon: Database,
    title: 'Databases & Tools',
    desc: 'Managing relational databases with complex query optimization, indexing, and schema design. Experienced with version control and containerization.',
    tools: ['MySQL', 'PostgreSQL', 'Oracle SQL', 'Git', 'Docker'],
  },
  {
    icon: Cpu,
    title: 'Embedded Systems & IoT',
    desc: 'Developing firmware for microcontrollers and integrating sensors for real-time control systems. Experienced with SPI/I2C protocols, RFID, LCD, and hardware troubleshooting.',
    tools: ['Arduino', 'Embedded C', 'Microcontrollers', 'Sensors'],
  },
];

const techStack = [
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'OpenCV', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = service.icon;

  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        className="glass-card border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 cursor-pointer group hover:border-blue-500 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md shadow-blue-500/20">
            <Icon size={22} color="white" strokeWidth={1.5} />
          </div>
          <motion.span 
            className="text-gray-400 dark:text-[#555] text-2xl font-light" 
            animate={{ rotate: isOpen ? 45 : 0 }} 
            transition={{ duration: 0.3 }}
          >
            +
          </motion.span>
        </div>

        <h3 className="text-gray-900 dark:text-[#D7E2EA] text-xl sm:text-2xl font-medium mb-2">{service.title}</h3>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }} 
              animate={{ height: 'auto', opacity: 1 }} 
              exit={{ height: 0, opacity: 0 }} 
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }} 
              className="overflow-hidden"
            >
              <p className="text-gray-600 dark:text-[#8A929B] text-sm sm:text-base leading-relaxed mt-3 mb-4">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span key={tool} className="text-xs text-gray-500 dark:text-[#8A929B] border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 rounded-full px-3 py-1">{tool}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </FadeIn>
  );
};

export const Services = () => (
  <section id="services" className="relative py-24 sm:py-32 dark:bg-[#0C0C0C] bg-white transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      
      <FadeIn>
        <p className="text-gray-400 dark:text-[#555] text-xs sm:text-sm uppercase tracking-[0.4em] mb-6">// Skills & Expertise</p>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-16">
          What I <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Do</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>

      {/* Tech Stack Sub-section */}
      <div className="mt-28">
        <FadeIn delay={0.2}>
          <h3 className="text-center text-gray-900 dark:text-white text-2xl md:text-3xl font-semibold mb-12">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Stack & Tooling</span>
          </h3>
        </FadeIn>

        <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.03, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.15, y: -4 }}
              className="w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300 group cursor-default"
            >
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain filter dark:brightness-100 group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden sm:block text-[10px] text-gray-500 dark:text-white/40 mt-2 font-medium tracking-wide uppercase group-hover:text-blue-500 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  </section>
);
