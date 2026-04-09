import { createContext, useContext } from 'react';
import { TOKENS, PHASES } from './theme';

export const ThemeContext = createContext({ dark: false });

// useTheme() returns:
//   dark    — boolean
//   t       — surface tokens (surface, pageBg, sand, border, textHeading, textBody, textMuted, navBg)
//   phases  — PHASES array with bg resolved to lightBg or darkBg
export function useTheme() {
  const { dark } = useContext(ThemeContext);
  const t = dark ? TOKENS.dark : TOKENS.light;
  const phases = PHASES.map(p => ({ ...p, bg: dark ? p.darkBg : p.lightBg }));
  return { dark, t, phases };
}
