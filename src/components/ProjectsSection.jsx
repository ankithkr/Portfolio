import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Layout, Server, Workflow, X, ExternalLink } from 'lucide-react';
import AleXDiagram from './AleXDiagram';

const ProjectsSection = () => {
  const [selectedDiagram, setSelectedDiagram] = useState(null);

  const projects = [
    {
      title: "Ale-x — Enterprise Data Intelligence Agent",
      description: "Enterprise AI agent orchestrated with LangGraph, integrating SAP (OData) to answer natural language queries with tables and dynamic visualizations. Uses Schema-aware SQL generation and RAG with semantic search.",
      icon: <Database size={24} color="var(--accent-purple)" />,
      diagram: "/ale_x_architecture.png"
    },
    {
      title: "ERP Process Automation (Headless AI)",
      description: "A headless GenAI-driven ERP automation for DBMSC Steel. Processes POs via event-driven n8n pipelines, enforcing business rules and reducing order processing from minutes to ~20 seconds.",
      icon: <Workflow size={24} color="var(--accent-blue)" />,
      diagram: "/erp_automation_architecture.png"
    },
    {
      title: "Clara — Agentic HR Assistant",
      description: "Voice-enabled agentic HR assistant built on LangGraph and MCP, with ElevenLabs voice interface. Automates resume screening, interview scheduling, and document-grounded HR Q&A.",
      icon: <Layout size={24} color="var(--accent-purple)" />,
      diagram: "/clara_hr_architecture.png"
    },
    {
      title: "DBMSC Steel — Headless Sales order Automation (Client Deployment)",
      description: "Delivered production-grade, headless GenAI automation for DBMSC Steel, autonomously processing incoming customer POs and creating SAP sales orders end-to-end. Built event-driven n8n pipelines for PO ingestion, structured data extraction, and Azure deployment.",
      icon: <Workflow size={24} color="var(--accent-blue)" />,
      diagram: false
    },
    {
      title: "Ekta — Memory-Driven Conversational AI Companion",
      description: "Developed a voice-enabled conversational AI companion using LangChain with persistent, graph-based long-term memory. Implemented context modeling and memory retrieval logic, allowing responses to evolve based on user history and interaction patterns.",
      icon: <Server size={24} color="var(--accent-blue)" />,
      diagram: false
    },
    {
      title: "AI-Powered HR Automation Chatbot (Zoho People Integration)",
      description: "Developed an LLM-driven HR automation chatbot integrating Zoho People APIs to handle attendance, leave, and timesheet workflows via Google Chat. Implemented intent parsing and secure API orchestration.",
      icon: <Layout size={24} color="var(--accent-purple)" />,
      diagram: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => setZoom(1);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        {/* ... section heading ... */}

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
        >
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="glass-panel" 
              style={{ 
                padding: '2rem', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  {project.icon}
                </div>
                {project.diagram !== false && (
                  <button 
                    onClick={() => { setSelectedDiagram(project); setZoom(1); }}
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: 'var(--accent-blue)', 
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      transition: 'opacity 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    View Workflow <ExternalLink size={14} />
                  </button>
                )}
              </div>
              
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', flex: 1, fontSize: '0.95rem' }}>
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedDiagram && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDiagram(null)}
            style={{ 
              position: 'fixed', 
              top: 0, left: 0, right: 0, bottom: 0, 
              background: 'rgba(0,0,0,0.92)', 
              zIndex: 100, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ 
                maxWidth: '1200px', 
                width: '100%', 
                height: '85vh', 
                position: 'relative',
                background: '#05050A',
                border: '1px solid var(--glass-border)',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div style={{ padding: '1.25rem 2rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>{selectedDiagram.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Hold Shift + Scroll to zoom • Click and Drag to pan</p>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                   <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '0.25rem', display: 'flex', gap: '0.25rem' }}>
                      <button onClick={handleZoomOut} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.4rem' }}>-</button>
                      <span style={{ fontSize: '0.85rem', color: '#fff', minWidth: '40px', textAlign: 'center' }}>{Math.round(zoom * 100)}%</span>
                      <button onClick={handleZoomIn} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.4rem' }}>+</button>
                   </div>
                   <button onClick={handleResetZoom} style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', border: 'none', cursor: 'pointer', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem' }}>Reset</button>
                   <button 
                    onClick={() => setSelectedDiagram(null)}
                    style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer', display: 'flex' }}
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              <div 
                style={{ 
                  flex: 1, 
                  overflow: 'hidden', 
                  position: 'relative', 
                  cursor: 'grab', 
                  background: '#000' 
                }} 
                onMouseDown={(e) => e.currentTarget.style.cursor = 'grabbing'} 
                onMouseUp={(e) => e.currentTarget.style.cursor = 'grab'}
                onWheel={(e) => {
                  if (e.shiftKey) {
                    e.preventDefault();
                    if (e.deltaY < 0) handleZoomIn();
                    else handleZoomOut();
                  }
                }}
              >
                {selectedDiagram.diagram ? (
                  <motion.div
                    drag
                    dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      scale: zoom,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <img 
                      src={selectedDiagram.diagram} 
                      alt="Workflow Diagram" 
                      style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', pointerEvents: 'none', borderRadius: '8px' }} 
                    />
                  </motion.div>
                ) : (
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <div style={{ textAlign: 'center', padding: '4rem' }}>
                      <div style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}>
                        <Workflow size={48} style={{ opacity: 0.3 }} />
                      </div>
                      <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Diagram Coming Soon</h4>
                      <p style={{ color: 'var(--text-secondary)' }}>I am currently building high-fidelity workflow visualizations for this project.</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

