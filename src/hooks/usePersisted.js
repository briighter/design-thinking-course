import { useState, useEffect } from 'react';

export function usePersisted(key, defaultValue) {
  const [val, setVal] = useState(() => {
    if (!key) return defaultValue;
    try {
      const s = localStorage.getItem(key);
      return s !== null ? JSON.parse(s) : defaultValue;
    } catch { return defaultValue; }
  });

  useEffect(() => {
    if (!key) return;
    try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
  }, [key, val]);

  return [val, setVal];
}
