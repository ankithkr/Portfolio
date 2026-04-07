import React from 'react';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      role: "AI and Analytics Lead",
      company: "Infosight Software and Consulting Services",
      period: "Jun 2024 – Present",
      description: [
        "Architected enterprise-grade agentic AI systems integrating LLMs with SAP ERP to automate sales orders, invoices, and procurement workflows, eliminating manual data entry",
        "Built Ale-x, an AI data intelligence agent orchestrated with LangGraph, enabling natural language querying of SAP datasets using schema-aware SQL generation, RAG with semantic search, and dynamic financial visualization.",
        "Delivered production headless GenAI automation for DBMSC Steel, processing customer purchase orders via event-driven n8n pipelines and SAP OData write operations",
        "Developed Clara, a voice-enabled agentic HR assistant built on LangGraph and MCP, with ElevenLabs voice interface, for autonomous resume screening, interview scheduling, offer generation, and HR self-service Q&A",
        "Designed a multi-channel AI ingestion layer (Email, WhatsApp, Teams) converting unstructured messages into validated, straight-through ERP transactions",
        "Implemented Ekta, a conversational AI companion with graph-based long-term memory and ElevenLabs voice synthesis for personalized, context-aware interactions."
      ],
      techStack: ["LLMs (Gemini, OpenAI, Claude)", "LangGraph", "LangChain", "MCP", "RAG", "SAP OData", "n8n", "FastAPI", "Docker", "Azure", "ElevenLabs", "Voice AI", "Graph Databases"]
    }
  ];

  return (
    <section id="experience" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--accent-blue)', fontSize: '1.5rem' }}>01.</span> 
            Professional Experience
            <div style={{ height: '1px', background: 'var(--glass-border)', flex: 1, marginLeft: '1rem' }}></div>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '2.5rem', position: 'relative' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem', color: '#fff' }}>{exp.role}</h3>
                    <div style={{ color: 'var(--accent-purple)', fontSize: '1.1rem', fontWeight: '500' }}>{exp.company}</div>
                  </div>
                  <div style={{ color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 1rem', borderRadius: '50px', fontSize: '0.9rem' }}>
                    {exp.period}
                  </div>
                </div>
                
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-secondary)' }}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.75rem', listStyleType: 'disc', paddingLeft: '0.5rem' }}>
                      {item}
                    </li>
                  ))}
                </ul>

                {exp.techStack && (
                  <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                    <span style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: '600', marginRight: '0.5rem', display: 'block', width: '100%', marginBottom: '0.5rem' }}>Tech Stack:</span>
                    {exp.techStack.map((tech, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--text-secondary)', 
                        background: 'rgba(255,255,255,0.03)', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '4px',
                        border: '1px solid var(--glass-border)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
