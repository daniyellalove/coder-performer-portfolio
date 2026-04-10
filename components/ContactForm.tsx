'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMode } from './ModeProvider';

const inquiryOptions = [
  { value: 'dev', label: 'A dev project' },
  { value: 'casting', label: 'Casting' },
  { value: 'both', label: 'Both' },
  { value: 'other', label: 'Something else' },
];

export function ContactForm() {
  const { mode } = useMode();
  const isDev = mode === 'dev';
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', inquiry: 'dev', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real form handling (e.g., Resend, Formspree, etc.)
    setSubmitted(true);
  };

  const inputStyle = {
    backgroundColor: 'var(--input-bg)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    borderRadius: isDev ? '4px' : '8px',
  };

  const focusClass = 'focus:outline-none focus:ring-2 focus:ring-[var(--accent)]';

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <p className="text-2xl mb-2" style={{ color: 'var(--accent)', fontFamily: isDev ? 'var(--font-mono)' : 'var(--font-serif)', fontStyle: isDev ? 'normal' : 'italic' }}>
          {isDev ? 'Message sent!' : 'Thank you.'}
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          {isDev ? "I'll get back to you soon." : "I'll be in touch shortly."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className={`px-4 py-2.5 text-sm transition-colors duration-300 ${focusClass}`}
            style={inputStyle}
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className={`px-4 py-2.5 text-sm transition-colors duration-300 ${focusClass}`}
            style={inputStyle}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }} htmlFor="inquiry">
          I&apos;m reaching out about
        </label>
        <select
          id="inquiry"
          value={form.inquiry}
          onChange={e => setForm(f => ({ ...f, inquiry: e.target.value }))}
          className={`px-4 py-2.5 text-sm transition-colors duration-300 ${focusClass}`}
          style={inputStyle}
        >
          {inquiryOptions.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className={`px-4 py-2.5 text-sm transition-colors duration-300 resize-none ${focusClass}`}
          style={inputStyle}
          placeholder={isDev ? 'Tell me about the project...' : 'Tell me about the role or project...'}
        />
      </div>

      <button
        type="submit"
        className="self-start px-8 py-3 font-semibold text-sm uppercase tracking-widest transition-all duration-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent)]"
        style={{
          backgroundColor: 'var(--accent)',
          color: isDev ? '#fff' : '#0e0e0e',
          borderRadius: isDev ? '4px' : '9999px',
        }}
      >
        Send
      </button>
    </form>
  );
}
