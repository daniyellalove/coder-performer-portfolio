'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/content';

const codeLines = [
  `const developer = {`,
  `  name: "${personalInfo.name}",`,
  `  role: "Front-End Developer",`,
  `  location: "${personalInfo.location}",`,
  `  stack: [`,
  `    "React", "TypeScript",`,
  `    "Next.js", "Tailwind CSS",`,
  `    "Node.js",`,
  `  ],`,
  `  openToWork: true,`,
  `  contact: "${personalInfo.email}",`,
  `};`,
];

export function HeroCode() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    setVisibleLines(0);
    const interval = setInterval(() => {
      setVisibleLines(v => {
        if (v >= codeLines.length) {
          clearInterval(interval);
          return v;
        }
        return v + 1;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full rounded-lg overflow-hidden shadow-2xl"
      style={{ backgroundColor: 'var(--code-bg)', border: '1px solid var(--border)' }}
      role="img"
      aria-label="Code block showing developer profile object"
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-1.5 px-4 py-3"
        style={{ backgroundColor: 'var(--code-header)', borderBottom: '1px solid var(--border)' }}
      >
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
        <span className="ml-4 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
          profile.ts
        </span>
      </div>

      {/* Code */}
      <div className="p-5 font-mono text-sm leading-7 min-h-[260px]">
        {codeLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex">
            <span className="select-none w-8 text-right mr-4 shrink-0" style={{ color: 'var(--text-muted)' }}>
              {i + 1}
            </span>
            <span style={{ color: 'var(--code-text)' }}>
              {line.startsWith('  ') ? (
                <>
                  <span style={{ color: 'var(--text-muted)' }}>{'  '}</span>
                  <SyntaxLine line={line.trim()} />
                </>
              ) : (
                <SyntaxLine line={line} />
              )}
            </span>
          </div>
        ))}
        {/* Cursor */}
        {visibleLines < codeLines.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-5 align-middle ml-1"
            style={{ backgroundColor: 'var(--accent)' }}
          />
        )}
      </div>
    </motion.div>
  );
}

function SyntaxLine({ line }: { line: string }) {
  // Very simple syntax highlight
  if (line.startsWith('const ') || line === '};') {
    const parts = line.split(/(const|=|\{|\}|;)/g);
    return (
      <span>
        {parts.map((p, i) => {
          if (p === 'const') return <span key={i} style={{ color: '#7c3aed' }}>{p}</span>;
          if (p === '=' || p === '{' || p === '}' || p === ';') return <span key={i} style={{ color: 'var(--text-muted)' }}>{p}</span>;
          return <span key={i} style={{ color: 'var(--code-text)' }}>{p}</span>;
        })}
      </span>
    );
  }
  if (line.includes(':')) {
    const colonIdx = line.indexOf(':');
    const key = line.slice(0, colonIdx);
    const val = line.slice(colonIdx + 1);
    return (
      <span>
        <span style={{ color: '#0ea5e9' }}>{key}</span>
        <span style={{ color: 'var(--text-muted)' }}>:</span>
        <span style={{ color: val.includes('"') ? '#22c55e' : val.includes('true') ? '#f97316' : 'var(--code-text)' }}>{val}</span>
      </span>
    );
  }
  return <span style={{ color: 'var(--code-text)' }}>{line}</span>;
}
