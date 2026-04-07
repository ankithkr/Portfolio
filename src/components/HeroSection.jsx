import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 0', position: 'relative' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px' }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '50px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', color: 'var(--accent-blue)', marginBottom: '1.5rem', fontWeight: '500', fontSize: '0.9rem' }}>
            Available for New Opportunities
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem' }}>
            Hi, I'm <br />
            <span className="text-gradient">Ankith KR.</span>
          </h1>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: '400' }}>
            AI Engineer building Agentic Systems & Enterprise Automation
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
            I specialize in architecting autonomous LLM-driven workflows that read, reason, and act on ERP data to eliminate manual operations and deliver real business impact.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/Ankith AI resume.pdf" target="_blank" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
            <a href="mailto:ankith321kr@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
              <Mail size={24} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
              <Github size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          <div className="glow-effect" style={{ borderRadius: '24px', padding: '1rem', background: 'var(--glass-bg)' }}>
             <img 
               src="/mypic.jpeg" 
               alt="Ankith KR" 
               style={{ 
                 width: '100%', 
                 maxWidth: '400px', 
                 borderRadius: '16px',
                 border: '1px solid var(--glass-border)',
                 boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                 aspectRatio: '3/4',
                 objectFit: 'cover'
               }} 
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
