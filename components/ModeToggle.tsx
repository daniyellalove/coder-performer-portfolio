'use client';

import { motion } from 'framer-motion';
import { useMode } from './ModeProvider';

export function ModeToggle() {
  const { mode, toggle } = useMode();
  const isPerformer = mode === 'performer';

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isPerformer ? 'developer' : 'performer'} mode`}
      className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-full"
    >
      <span
        className="text-xs font-mono uppercase tracking-widest transition-colors duration-500"
        style={{ color: !isPerformer ? 'var(--accent)' : 'var(--text-muted)' }}
      >
        dev
      </span>

      {/* Track */}
      <div
        className="relative w-12 h-6 rounded-full transition-colors duration-500 border"
        style={{
          backgroundColor: 'var(--surface)',
          borderColor: 'var(--accent)',
        }}
      >
        {/* Thumb */}
        <motion.div
          className="absolute top-0.5 w-5 h-5 rounded-full"
          style={{ backgroundColor: 'var(--accent)' }}
          animate={{ left: isPerformer ? '1.375rem' : '0.125rem' }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      </div>

      <span
        className="text-xs uppercase tracking-widest transition-colors duration-500"
        style={{
          fontFamily: 'var(--font-serif, Georgia, serif)',
          fontStyle: 'italic',
          color: isPerformer ? 'var(--accent)' : 'var(--text-muted)',
        }}
      >
        performer
      </span>
    </button>
  );
}
