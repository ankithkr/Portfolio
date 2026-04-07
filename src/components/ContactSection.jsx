import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, Linkedin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding text-center" style={{ paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ color: 'var(--accent-blue)', fontSize: '1rem', marginBottom: '1rem', fontWeight: '500' }}>
            04. What's Next?
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>Get In Touch</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            I am currently open to new opportunities. Whether you have a question about Agentic AI, enterprise automation, or just want to say hi, I'll try my best to get back to you!
          </p>

          <a href="mailto:ankith321kr@gmail.com" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '4rem' }}>
            <Mail size={18} /> Say Hello
          </a>

          <div style={{ height: '1px', background: 'var(--glass-border)', margin: '0 auto 2rem auto', width: '50%' }}></div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
            <a href="mailto:ankith321kr@gmail.com" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Mail size={18} /> <span style={{ fontSize: '0.9rem' }}>Email</span>
            </a>
            <a href="tel:+918105568932" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Phone size={18} /> <span style={{ fontSize: '0.9rem' }}>Phone</span>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Linkedin size={18} /> <span style={{ fontSize: '0.9rem' }}>LinkedIn</span>
            </a>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <Code size={14} /> Designed & Built by Ankith KR using Agentic UI
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
