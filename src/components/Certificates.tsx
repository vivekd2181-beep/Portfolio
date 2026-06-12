import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award } from 'lucide-react';

interface Certificate {
  title: string;
  org: string;
  date: string;
  icon: string;
  bgGradient: string;
  detail: string;
}

const certData: Record<'tech' | 'other', Certificate[]> = {
  tech: [
    {
      title: 'Solutions Architecture Job Simulation',
      org: 'AWS (Amazon Web Services) | Forage',
      date: 'April 2025',
      icon: '☁️',
      bgGradient: 'from-amber-600/20 via-orange-950/30 to-yellow-900/20',
      detail: 'Successfully completed the AWS Solutions Architecture virtual job simulation program. Gained practical experience in designing simple, secure, highly available, and scalable cloud hosting architectures following AWS best practices.'
    },
    {
      title: 'AI Workplace Proficiency Certification',
      org: 'Superhuman AI Academy',
      date: 'July 2025',
      icon: '🤖',
      bgGradient: 'from-green-600/30 via-emerald-950/40 to-teal-900/30',
      detail: 'Certified proficiency in using cutting-edge AI workplace systems. Covered advanced prompt engineering, workplace automation tools (Gemini, ChatGPT, Zapier, Notion), and integrating LLM pipelines to optimize workplace workflows.'
    },
    {
      title: 'Python Programming Virtual Internship',
      org: 'CodSoft',
      date: 'September 2025',
      icon: '🐍',
      bgGradient: 'from-yellow-600/20 via-blue-900/35 to-indigo-900/30',
      detail: 'Completed a 4-week virtual internship program focused on Python Programming. Undertook hands-on tasks and built projects highlighting intermediate-to-advanced software development, data parsing, and scripting practices.'
    },
    {
      title: 'AI Tools & ChatGPT Workshop',
      org: 'be10x',
      date: 'July 2025',
      icon: '⚡',
      bgGradient: 'from-purple-600/25 via-indigo-950/35 to-purple-900/25',
      detail: 'Completed the be10x AI Tools and ChatGPT workshop. Trained in leveraging AI models to generate professional presentations in under 5 minutes, analyze massive datasets in under 30 minutes, and write & debug code in under 10 minutes.'
    },
    {
      title: 'The Complete Python Programming Course',
      org: 'Mind Luster',
      date: 'December 2024',
      icon: '💻',
      bgGradient: 'from-blue-600/25 via-sky-950/40 to-blue-900/30',
      detail: 'Successfully completed a full comprehensive course on Python Programming covering structural coding, libraries (Pandas, NumPy), data collection, control flow, and building executable console scripts.'
    }
  ],
  other: [
    {
      title: 'Inter-College Electronics Exhibition',
      org: 'VTU Regional Exhibition',
      date: '2025',
      icon: '🔬',
      bgGradient: 'from-purple-600/20 via-pink-900/30 to-indigo-900/30',
      detail: 'Participated in the electronics project showcase, presenting a prototype of the contactless fuel dispensing system.'
    },
    {
      title: 'Technical Quiz Competition',
      org: 'RRIT College Fest',
      date: '2024',
      icon: '🧠',
      bgGradient: 'from-cyan-600/20 via-blue-900/30 to-teal-900/30',
      detail: 'Participated in inter-college competitive trivia quizzes focusing on digital electronics, programming logic, and networks.'
    }
  ]
};

export const Certificates = () => {
  const [activeTab, setActiveTab] = useState<'tech' | 'other'>('tech');
  const [modalCert, setModalCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="cert-section py-24 sm:py-32 dark:bg-[#0C0C0C] bg-white transition-colors duration-300">
      <div className="cert-wrapper max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cert-title text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certificates & Achievements
            </span>
          </h2>
          <p className="cert-subtitle text-gray-500 dark:text-white/60 mt-3 text-sm sm:text-base">
            Explore my achievements — both technical & beyond.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="cert-tabs flex justify-center gap-4 mt-8">
          {(['tech', 'other'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cert-tab px-6 py-3 font-semibold text-sm rounded-xl border border-gray-200 dark:border-white/10 transition-all ${
                activeTab === tab
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20 active'
                  : 'bg-gray-50/50 dark:bg-white/5 text-gray-600 dark:text-white/80 hover:translate-y-[-2px]'
              }`}
            >
              {tab === 'tech' ? 'Technical' : 'Activities & Other'}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="certs-grid mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certData[activeTab].map((cert, index) => {
            // Give each card a slight random angle to match the look in kunj-desai-2
            const randomAngle = (index % 3 === 0 ? -2 : index % 3 === 1 ? 2 : -1);
            return (
              <motion.div
                key={cert.title}
                className="cert-card glass-card rounded-2xl border border-gray-200 dark:border-white/10 p-6 cursor-pointer text-left flex flex-col justify-between h-72 shadow-sm transition-all duration-300"
                style={{ '--angle': `${randomAngle}deg` } as React.CSSProperties}
                initial={{ opacity: 0, y: 40, rotate: randomAngle }}
                whileInView={{ opacity: 1, y: 0, rotate: randomAngle }}
                whileHover={{ scale: 1.05, rotate: 0, boxShadow: '0 10px 30px rgba(59,130,246,0.15)' }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.4 }}
                onClick={() => setModalCert(cert)}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.bgGradient} flex items-center justify-center text-2xl mb-4 shadow-inner`}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2 line-clamp-2">{cert.title}</h3>
                  <p className="text-sm text-blue-500 dark:text-blue-400 font-medium mb-1">{cert.org}</p>
                </div>
                <div className="flex items-center justify-between mt-4 border-t border-gray-100 dark:border-white/5 pt-4">
                  <span className="text-xs text-gray-400 dark:text-white/40">{cert.date}</span>
                  <span className="text-xs text-blue-500 dark:text-blue-400 font-semibold group-hover:underline">View Certificate →</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Pop-up */}
        <AnimatePresence>
          {modalCert && (
            <motion.div
              className="cert-modal fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalCert(null)}
            >
              <motion.div
                className="bg-white dark:bg-[#1b1c29] border border-gray-200 dark:border-white/10 rounded-2xl p-8 max-w-xl w-full shadow-2xl relative"
                initial={{ scale: 0.85, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.85, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setModalCert(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 dark:hover:text-white text-xl"
                >
                  ✕
                </button>
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${modalCert.bgGradient} flex items-center justify-center text-4xl mb-6 shadow-lg`}>
                    {modalCert.icon}
                  </div>
                  <h3 className="text-gray-900 dark:text-white text-2xl font-bold mb-2">{modalCert.title}</h3>
                  <p className="text-blue-500 dark:text-blue-400 font-semibold text-base mb-4">{modalCert.org}</p>
                  <p className="text-gray-400 dark:text-white/40 text-sm mb-6">{modalCert.date}</p>
                  
                  <div className="bg-gray-50 dark:bg-black/35 rounded-xl p-6 border border-gray-100 dark:border-white/5 w-full text-left">
                    <div className="flex items-center gap-2 mb-3 text-blue-500 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
                      <Award size={16} />
                      Certificate Details
                    </div>
                    <p className="text-gray-600 dark:text-[#8A929B] text-sm leading-relaxed">
                      {modalCert.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
