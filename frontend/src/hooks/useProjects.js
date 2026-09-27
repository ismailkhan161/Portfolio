import { useEffect, useState } from 'react';
import { getProjects } from '../services/api.js';
import { FALLBACK_PROJECTS } from '../data/projects.js';

/**
 * Renders the bundled projects immediately, then swaps in the list from the
 * backend (GET /api/projects) when it responds. If the API is unreachable the
 * bundled list simply stays, so the section is never empty.
 */
export function useProjects() {
  const [projects, setProjects] = useState(FALLBACK_PROJECTS);
  const [source, setSource] = useState('bundled');

  useEffect(() => {
    let cancelled = false;
    getProjects()
      .then((payload) => {
        if (!cancelled && Array.isArray(payload?.data) && payload.data.length > 0) {
          setProjects(payload.data);
          setSource('api');
        }
      })
      .catch(() => {
        /* keep bundled projects */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, source };
}
