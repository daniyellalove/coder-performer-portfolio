'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from './ModeToggle';
import { useMode } from './ModeProvider';
import { personalInfo } from '@/lib/content';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const { mode } = useMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'var(--bg-primary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
          style={{
            color: 'var(--text-primary)',
            fontFamily: mode === 'dev' ? 'var(--font-mono)' : 'var(--font-serif)',
            fontStyle: mode === 'performer' ? 'italic' : 'normal',
          }}
          aria-label="Home"
        >
          {personalInfo.initials}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm transition-colors duration-300 hover:opacity-100 focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
                style={{ color: 'var(--text-secondary)', opacity: 0.8 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ModeToggle />

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className="block w-5 h-0.5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: 'var(--text-primary)',
                transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                backgroundColor: 'var(--text-primary)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300 origin-center"
              style={{
                backgroundColor: 'var(--text-primary)',
                transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}
          >
            <ul className="flex flex-col px-4 py-4 gap-4" role="list">
              {links.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-base transition-colors duration-300"
                    style={{ color: 'var(--text-secondary)' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
