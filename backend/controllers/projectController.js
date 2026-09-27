import { PROJECTS } from '../data/projects.js';

// GET /api/projects
export function getProjects(req, res) {
  res.json({ success: true, data: PROJECTS });
}
