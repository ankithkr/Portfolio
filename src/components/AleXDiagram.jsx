import React from 'react';
import { motion } from 'framer-motion';
import { Database, MessageSquare, Search, Code, FileText, BarChart3, Settings, Shield, BookOpen, Layers } from 'lucide-react';

const Node = ({ title, subtitle, icon: Icon, color, x, y, width = 220 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: width,
      zIndex: 2,
    }}
  >
    <div className="glass-panel" style={{ 
      padding: '0.8rem', 
      borderLeft: `4px solid ${color}`,
      background: 'rgba(15, 15, 25, 0.9)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
        {Icon && <Icon size={16} style={{ color: color }} />}
        <span style={{ fontWeight: '600', fontSize: '0.85rem', color: '#fff' }}>{title}</span>
      </div>
      {subtitle && (
        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', lineHeight: '1.3' }}>
          {subtitle}
        </div>
      )}
    </div>
  </motion.div>
);

const Edge = ({ x1, y1, x2, y2, label, dashed = false, curved = false }) => {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  
  const path = curved 
    ? `M ${x1} ${y1} Q ${midX + 20} ${midY + 20} ${x2} ${y2}`
    : `M ${x1} ${y1} L ${x2} ${y2}`;

  return (
    <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.3)" />
        </marker>
      </defs>
      <path
        d={path}
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.5"
        strokeDasharray={dashed ? "5,5" : "none"}
        markerEnd="url(#arrowhead)"
      />
      {label && (
        <text 
          x={midX} 
          y={midY - 8} 
          textAnchor="middle" 
          fill="rgba(255,255,255,0.5)" 
          style={{ fontSize: '0.65rem', fontWeight: '500' }}
        >
          {label}
        </text>
      )}
    </svg>
  );
};

const AleXDiagram = () => {
  return (
    <div style={{ 
      width: '1100px', 
      height: '900px', 
      position: 'relative', 
      background: '#05050A', 
      borderRadius: '12px',
      padding: '40px',
      margin: '0 auto',
      transform: 'scale(0.95)',
      transformOrigin: 'top center'
    }}>
      {/* Background Layers */}
      <div style={{ position: 'absolute', top: '10%', left: '2%', color: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', fontWeight: '600' }}>① User interface layer</div>
      <div style={{ position: 'absolute', top: '25%', left: '2%', color: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', fontWeight: '600', borderTop: '1px dashed rgba(255,255,255,0.05)', width: '96%', paddingTop: '0.5rem' }}>② Data ingestion layer</div>
      <div style={{ position: 'absolute', top: '48%', left: '2%', color: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', fontWeight: '600', borderTop: '1px dashed rgba(255,255,255,0.05)', width: '96%', paddingTop: '0.5rem' }}>③ Intelligence layer</div>
      <div style={{ position: 'absolute', top: '82%', left: '2%', color: 'rgba(255,255,255,0.05)', fontSize: '0.8rem', fontWeight: '600', borderTop: '1px dashed rgba(255,255,255,0.05)', width: '96%', paddingTop: '0.5rem' }}>④ Output layer</div>

      {/* Nodes */}
      {/* Layer 1 */}
      <Node x={440} y={40} title="Ale-X chat interface" subtitle="Natural language input • Web / Mobile UI" icon={MessageSquare} color="#8b5cf6" />

      {/* Layer 2 */}
      <Node x={440} y={150} title="Query router" subtitle="Classifies → SQL agent or Finance RAG" icon={Settings} color="#8b5cf6" />
      <Node x={180} y={240} title="SAP OData connector" subtitle="Auth • pagination • delta sync" icon={Database} color="#10b981" />
      <Node x={700} y={240} title="MongoDB metadata store" subtitle="Table schema • column types • instructions" icon={Shield} color="#10b981" />
      <Node x={180} y={340} title="Pandas dataframe" subtitle="In-memory • schema-inferred • cached" icon={Code} color="#a1a1aa" />

      {/* Layer 3 */}
      <Node x={440} y={450} title="LLM core" subtitle="Schema-aware SQL synthesis • reasoning" icon={FileText} color="#ea580c" width={280} />
      <Node x={100} y={540} title="Finance RAG agent" subtitle="ERP data + annual reports • grounded" icon={Search} color="#ca8a04" width={280} />
      
      {/* Sub-pipeline for RAG */}
      <Node x={20} y={640} title="SAP ERP data" subtitle="P&L • balance sheet" icon={Database} color="#10b981" width={160} />
      <Node x={190} y={640} title="Annual reports" subtitle="PDF • MD&A • footnotes" icon={BookOpen} color="#10b981" width={160} />
      <Node x={80} y={730} title="Chunk + embed" subtitle="Semantic split • vector store" icon={Layers} color="#a1a1aa" width={220} />
      <Node x={80} y={810} title="Context assembler" subtitle="ERP rows + doc chunks merged" icon={FileText} color="#a1a1aa" width={220} />

      <Node x={440} y={570} title="Execution engine" subtitle="pandasql / DuckDB • query results" icon={BarChart3} color="#a1a1aa" width={300} />

      {/* Layer 4 */}
      <Node x={440} y={680} title="Formatted response" subtitle="Text • tables • dynamic charts • citations" icon={BarChart3} color="#22c55e" width={340} />

      {/* Edges */}
      <Edge x1={540} y1={95} x2={540} y2={150} label="user query" />
      
      {/* Router flow */}
      <Edge x1={440} y1={190} x2={290} y2={240} label="SAP OData fetch" />
      <Edge x1={650} y1={190} x2={800} y2={240} label="schema lookup" />

      {/* Data Ingestion Connections */}
      <Edge x1={290} y1={290} x2={290} y2={340} label="raw records" />
      <Edge x1={290} y1={395} x2={440} y2={470} label="rendered in UI" />
      <Edge x1={810} y1={295} x2={810} y2={470} label="schema + instructions" />

      {/* Intelligence Connections */}
      <Edge x1={550} y1={505} x2={550} y2={570} label="SQL query" />
      <Edge x1={700} y1={570} x2={850} y2={500} dashed curved label="aggregated metrics" />
      <Edge x1={850} y1={450} x2={720} y2={470} dashed />

      <Edge x1={380} y1={560} x2={450} y2={505} dashed curved label="retrieved context" />

      {/* RAG Sub-flow */}
      <Edge x1={100} y1={685} x2={100} y2={730} />
      <Edge x1={270} y1={685} x2={270} y2={730} />
      <Edge x1={190} y1={785} x2={190} y2={810} label="top-k chunks" />
      <Edge x1={190} y1={865} x2={440} y2={600} />

      {/* Output flow */}
      <Edge x1={550} y1={625} x2={550} y2={680} label="reasoned prose" />
      
      {/* Loop to UI */}
      <Edge x1={440} y1={710} x2={60} y2={50} dashed curved />

      {/* Legend */}
      <div style={{ position: 'absolute', bottom: '20px', left: '40px', display: 'flex', gap: '20px', opacity: 0.6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem', color: '#fff' }}>
          <div style={{ width: '12px', height: '12px', background: '#8b5cf6', borderRadius: '2px' }}></div> User interface
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem', color: '#fff' }}>
          <div style={{ width: '12px', height: '12px', background: '#10b981', borderRadius: '2px' }}></div> Data sources
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem', color: '#fff' }}>
          <div style={{ width: '12px', height: '12px', background: '#ea580c', borderRadius: '2px' }}></div> LLM / AI core
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem', color: '#fff' }}>
          <div style={{ width: '12px', height: '12px', background: '#22c55e', borderRadius: '2px' }}></div> Output
        </div>
      </div>
    </div>
  );
};

export default AleXDiagram;
