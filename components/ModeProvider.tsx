'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Mode } from '@/lib/types';

interface ModeContextValue {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggle: () => void;
}

const ModeContext = createContext<ModeContextValue>({
  mode: 'dev',
  setMode: () => {},
  toggle: () => {},
});

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>('dev');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check URL param first, then localStorage
    const params = new URLSearchParams(window.location.search);
    const urlMode = params.get('mode') as Mode | null;
    if (urlMode === 'dev' || urlMode === 'performer') {
      setModeState(urlMode);
      document.documentElement.setAttribute('data-mode', urlMode);
      return;
    }
    const stored = localStorage.getItem('portfolio-mode') as Mode | null;
    const initial = stored === 'performer' ? 'performer' : 'dev';
    setModeState(initial);
    document.documentElement.setAttribute('data-mode', initial);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-mode', mode);
    localStorage.setItem('portfolio-mode', mode);
    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set('mode', mode);
    window.history.replaceState({}, '', url.toString());
  }, [mode, mounted]);

  const setMode = (m: Mode) => setModeState(m);
  const toggle = () => setModeState(prev => prev === 'dev' ? 'performer' : 'dev');

  return (
    <ModeContext.Provider value={{ mode, setMode, toggle }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}
