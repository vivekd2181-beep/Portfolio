import { motion } from 'framer-motion';
import { Download, BookOpen, Briefcase, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.E. – Electronics & Communication Engineering',
    school: 'RR Institute of Technology, Bengaluru | Visvesvaraya Technological University (VTU)',
    period: '2022 – 2026',
    detail: 'Hands-on hardware & firmware design, microcontrollers, and real-time systems.'
  },
  {
    degree: 'Java Full Stack Development Training',
    school: 'JSpiders Training Institute, Bengaluru, Karnataka',
    period: '6-Month Program (2025)',
    detail: 'Intensive software development program; structured programming, database interaction, and web technologies.'
  }
];

const projectsHighlights = [
  '🩺 AI-Powered Churn Analytics — ML pipeline with 91% accuracy (XGBoost/Random Forest), Flask API serving <200ms real-time predictions, MySQL database integration.',
  '💼 Employee Management System — Enterprise full-stack CRUD application using Spring Boot, Hibernate ORM, and Spring MVC with 1000+ unit and integration test scenarios.',
  '🤖 Vehicle Authentication System — ECE mini project using Arduino, RFID RC522, LCD, solenoid valve, buzzer, and Embedded C achieving 100% read accuracy across test cards.',
  '📊 Predictive Analytics and Deep Learning — Preprocessed datasets using Pandas/NumPy, built classification/regression pipelines, and visualized insights with Seaborn.'
];

const skills = [
  'Java', 'Python 3.x', 'Spring Boot', 'Hibernate', 'REST APIs', 'Spring MVC', 'React', 'HTML5', 'CSS3', 'JavaScript (ES6+)',
  'MySQL', 'PostgreSQL', 'Oracle SQL', 'Arduino', 'Embedded C', 'Microcontrollers', 'Sensors', 'SPI/I2C', 'Docker', 'Git', 'GitHub', 'Postman', 'Jupyter'
];

export const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  } as const;

  return (
    <section id="resume" className="resume-section py-24 sm:py-32 dark:bg-[#0C0C0C] bg-white transition-colors duration-300">
      <div className="resume-container max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="resume-title text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-gray-500 dark:text-white/60 mt-3 text-sm sm:text-base">
            Professional background, academic journey, and technical expertise.
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="resume-download-top flex justify-center mb-16"
        >
          <a
            href="#"
            className="download-btn flex items-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              alert("Resume PDF download link can be connected here!");
            }}
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="profile-box glass-card rounded-2xl p-8 max-w-4xl mx-auto mb-20 text-center border border-gray-200 dark:border-white/10"
        >
          <h3 className="profile-name text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            VIVEK D.
          </h3>
          <p className="profile-info text-[#8A929B] leading-relaxed mb-6">
            📚 B.E. — Electronics & Communication Engineering <br />
            📍 Bengaluru, Karnataka, India <br />
            📩 vivekbharadwaj05@gmail.com | 📱 +91 9164928645
          </p>
          <p className="profile-summary text-gray-600 dark:text-[#d1d5db] max-w-2xl mx-auto leading-relaxed">
            Results-driven Java Full Stack Developer and Python/AI-ML Engineer with hands-on experience building scalable enterprise web applications and intelligent systems. Proficient in Spring Boot, RESTful APIs, Python, Machine Learning, and Deep Learning frameworks. Adept at end-to-end development from model training to API deployment.
          </p>
        </motion.div>

        {/* Timeline & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column - Education & Project Bullets */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            {/* Education */}
            <div>
              <div className="resume-heading flex items-center gap-3 mb-6">
                <div className="icon-box w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>

              <div className="resume-list flex flex-col gap-6">
                {education.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    className="resume-card bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:translate-x-1.5 transition-transform duration-300"
                  >
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.degree}</h4>
                    <p className="resume-card-school text-sm text-blue-500 dark:text-blue-400 font-medium mb-1">{item.school}</p>
                    <p className="text-xs text-gray-500 dark:text-white/40 mb-3">{item.period}</p>
                    <p className="text-sm text-gray-600 dark:text-[#8A929B] leading-relaxed">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project Bullets */}
            <div>
              <div className="resume-heading flex items-center gap-3 mb-6">
                <div className="icon-box w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Key Achievements</h3>
              </div>

              <ul className="project-list list-none flex flex-col gap-4 text-gray-600 dark:text-[#d1d5db]">
                {projectsHighlights.map((hl, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative pl-6 leading-relaxed text-sm"
                  >
                    <span className="absolute left-0 text-blue-500 font-bold">•</span>
                    {hl}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Skills & Technical expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-start"
          >
            <div className="resume-heading flex items-center gap-3 mb-6">
              <div className="icon-box w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Award size={20} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Technical Core</h3>
            </div>

            <p className="text-gray-600 dark:text-[#8A929B] text-sm md:text-base leading-relaxed mb-8">
              ✨ Technical expertise blended with creativity — explore my core competencies below.
            </p>

            <div className="resume-skills">
              <div className="skill-tags flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.03, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="skill-chip px-4 py-2 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50/50 dark:bg-[#1C1C29] text-gray-800 dark:text-[#e9d5ff] font-medium text-xs sm:text-sm shadow-sm transition-all duration-200 cursor-default hover:shadow-md hover:shadow-blue-500/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
