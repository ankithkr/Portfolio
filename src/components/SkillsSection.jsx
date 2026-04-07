import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: "Python, SQL"
    },
    {
      title: "AI & Agentic Systems",
      skills: "LLMs (Gemini, OpenAI, Claude), MCP, RAG, LangChain, LangGraph, Prompt Engineering, Voice AI, Semantic search, Embeddings."
    },
    {
      title: "Data & Storage",
      skills: "MongoDB, Vector DBs (Pinecone, Chroma), Graph DBs, SQLite, SupaBase"
    },
    {
      title: "ERP & Automation",
      skills: "SAP OData/RFC, n8n, Event-driven workflows, Multi-channel automation, Zapier"
    },
    {
      title: "Backend & Infra",
      skills: "FastAPI, Flask, REST APIs, Docker, Git, Azure"
    }
  ];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--accent-blue)', fontSize: '1.5rem' }}>03.</span> 
            Technical Skills
            <div style={{ height: '1px', background: 'var(--glass-border)', flex: 1, marginLeft: '1rem' }}></div>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.25rem',
                  padding: '0.5rem 0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span style={{ 
                    color: 'var(--accent-blue)', 
                    fontWeight: '600', 
                    fontSize: '1rem', 
                    minWidth: '180px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {category.title}:
                  </span>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '1rem', 
                    lineHeight: '1.7',
                    flex: 1
                  }}>
                    {category.skills}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
