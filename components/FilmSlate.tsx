'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/content';

export function FilmSlate() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -15 }}
      animate={{ opacity: 1, rotateX: 0 }}
      exit={{ opacity: 0, rotateX: 15 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-sm mx-auto"
      role="img"
      aria-label="Film slate showing performer profile"
      style={{ perspective: '800px' }}
    >
      {/* Slate top (clapper) */}
      <motion.div
        className="h-10 rounded-t-md flex items-center px-4 gap-2 overflow-hidden"
        style={{ backgroundColor: '#1a1a1a', border: '2px solid var(--accent)' }}
        animate={{ rotateX: [0, -25, 0] }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        {/* Diagonal stripes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-full"
            style={{
              backgroundColor: i % 2 === 0 ? '#c9a96e' : '#1a1a1a',
              clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)',
            }}
          />
        ))}
      </motion.div>

      {/* Slate body */}
      <div
        className="rounded-b-md p-6 font-mono text-sm"
        style={{
          backgroundColor: '#111',
          border: '2px solid var(--accent)',
          borderTop: 'none',
        }}
      >
        <SlateRow label="PRODUCTION" value={personalInfo.name} large />
        <SlateRow label="DIRECTOR" value="TBD" />
        <SlateRow label="CAMERA" value="A" />
        <SlateRow label="ROLL" value="24" />
        <div className="border-t my-3" style={{ borderColor: 'var(--accent)', opacity: 0.3 }} />
        <SlateRow label="LOCATION" value={personalInfo.location} />
        <SlateRow label="AVAIL." value="Now" accent />
        <SlateRow label="REPRESENT." value={personalInfo.stats.representation} />
        <div className="border-t my-3" style={{ borderColor: 'var(--accent)', opacity: 0.3 }} />
        <SlateRow label="HT" value={personalInfo.stats.height} />
        <SlateRow label="EYES" value={personalInfo.stats.eyes} />
        <SlateRow label="HAIR" value={personalInfo.stats.hair} />
      </div>
    </motion.div>
  );
}

function SlateRow({
  label,
  value,
  large,
  accent,
}: {
  label: string;
  value: string;
  large?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex justify-between items-baseline mb-2">
      <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
        {label}
      </span>
      <span
        className={`${large ? 'text-base font-bold' : 'text-sm'} transition-colors`}
        style={{ color: accent ? 'var(--accent)' : '#e5e5e5' }}
      >
        {value}
      </span>
    </div>
  );
}
