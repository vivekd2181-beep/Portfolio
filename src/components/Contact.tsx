import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, MessageCircle, Link2, Share2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'warning' | null;
    msg: string;
  }>({ type: null, msg: '' });

  const [loading, setLoading] = useState(false);

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Bengaluru, Karnataka, India' },
    { icon: Mail, label: 'Email', value: 'vivekbharadwaj05@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9164928645' },
  ];

  const socialLinks = [
    { icon: Share2, url: 'https://github.com' },
    { icon: Link2, url: 'https://linkedin.com/in/vivek-d-7821a8379' },
    { icon: MessageCircle, url: 'https://wa.me/+919164928645' }, // WhatsApp link
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setStatus({ type: 'warning', msg: '⚠️ Please fill all fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({ type: 'warning', msg: '⚠️ Enter a valid email address.' });
      return;
    }

    setLoading(true);
    setStatus({ type: null, msg: '' });

    // Mock API call to simulate email sending
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus({ type: 'success', msg: '✅ Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', msg: '❌ Failed to send message. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 dark:bg-[#0C0C0C] bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-500 dark:text-white/60 mt-3 text-sm sm:text-base">
            Feel free to reach out for collaborations, full-time opportunities, or inquiries.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Contact Info & Socials */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Let’s Connect & Collaborate <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">🤝</span>
              </h3>
              <p className="text-gray-600 dark:text-white/70 mb-10 text-sm sm:text-base leading-relaxed">
                Whether it’s a new software project, hardware integration, or collaboration — I’d love to hear from you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 bg-gray-50/50 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-4 hover:border-blue-500 dark:hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-500 dark:text-white/60 text-xs sm:text-sm">{info.label}</p>
                        <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">{info.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Social icons row */}
            <div className="flex flex-wrap gap-4 mt-12">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.12, rotate: 4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-50/50 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 hover:border-blue-500 shadow-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  >
                    <Icon className="text-blue-500 dark:text-blue-400 w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label className="text-gray-700 dark:text-white/80 block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-white/80 block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white transition-colors"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-white/80 block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white transition-colors"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-white/80 block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {status.type && (
                <div
                  className={`p-4 rounded-xl text-sm font-medium ${
                    status.type === 'success'
                      ? 'bg-emerald-50 dark:bg-emerald-950/35 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                      : status.type === 'warning'
                      ? 'bg-amber-50 dark:bg-amber-950/35 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300'
                      : 'bg-rose-50 dark:bg-rose-950/35 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300'
                  }`}
                >
                  {status.msg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
