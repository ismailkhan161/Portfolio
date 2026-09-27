import { useCallback, useState } from 'react';

const STORAGE_KEY = 'theme';
const readTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';

/** The initial theme is applied by a script in index.html; this hook only toggles it. */
export function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const next = readTheme() === 'dark' ? 'light' : 'dark';

    root.classList.add('theme-transition');
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable (private mode): the choice just won't persist */
    }
    setTheme(next);
    window.setTimeout(() => root.classList.remove('theme-transition'), 350);
  }, []);

  return { theme, toggleTheme };
}
