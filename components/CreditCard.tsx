'use client';

import { motion } from 'framer-motion';
import { Credit } from '@/lib/types';

const typeLabel: Record<string, string> = {
  commercial: 'Commercial',
  film: 'Film',
  print: 'Print',
  digital: 'Digital',
  theater: 'Theater',
};

export function CreditCard({ credit }: { credit: Credit }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-lg overflow-hidden group"
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Thumbnail */}
      <div
        className="aspect-video flex items-center justify-center text-4xl select-none relative overflow-hidden"
        style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid var(--border)' }}
        aria-hidden="true"
      >
        {/* Film grain texture overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
        }} />
        <span style={{ color: 'var(--accent)', opacity: 0.5, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '2rem' }}>
          {typeLabel[credit.type]?.[0] ?? '?'}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3
              className="font-semibold text-base leading-snug"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
              }}
            >
              {credit.title}
            </h3>
            {credit.year && (
              <span className="text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
                {credit.year}
              </span>
            )}
          </div>
          <p className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            {credit.role}
          </p>
        </div>

        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
          {credit.description}
        </p>

        {/* Meta */}
        <div className="text-xs space-y-1" style={{ color: 'var(--text-muted)' }}>
          {credit.director && <div>Dir. {credit.director}</div>}
          {credit.client && <div>Client: {credit.client}</div>}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {credit.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-sm"
              style={{
                backgroundColor: 'var(--tag-bg)',
                color: 'var(--accent)',
                border: '1px solid var(--tag-border)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
