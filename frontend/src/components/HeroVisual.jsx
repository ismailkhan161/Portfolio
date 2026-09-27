import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

// Each line is a list of [token class, text] pairs so the snippet can be highlighted without a library.
const CODE_LINES = [
  [['tok-c', '// backend/controllers/contactController.js']],
  [
    ['tok-k', 'export const '],
    ['tok-f', 'createContactMessage'],
    ['tok-p', ' = '],
    ['tok-k', 'async '],
    ['tok-p', '(req, res) => {'],
  ],
  [
    ['tok-p', '  '],
    ['tok-k', 'await '],
    ['tok-p', 'ContactMessage.'],
    ['tok-f', 'create'],
    ['tok-p', '(req.body);'],
  ],
  [
    ['tok-p', '  res.'],
    ['tok-f', 'status'],
    ['tok-p', '('],
    ['tok-n', '201'],
    ['tok-p', ').'],
    ['tok-f', 'json'],
    ['tok-p', '({ success: '],
    ['tok-n', 'true'],
    ['tok-p', ' });'],
  ],
  [['tok-p', '};']],
];

const STACK = [
  { label: 'React.js', icon: FaReact },
  { label: 'Express.js', icon: SiExpress },
  { label: 'Node.js', icon: FaNodeJs },
  { label: 'MongoDB', icon: SiMongodb },
];

export default function HeroVisual() {
  return (
    <div className="hero-visual" role="img" aria-label="Code snippet and the React, Express, Node.js, MongoDB stack">
      <div className="terminal">
        <div className="terminal-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <p>contactController.js</p>
        </div>
        <pre className="terminal-code" aria-hidden="true">
          {CODE_LINES.map((tokens, lineIndex) => (
            <code key={lineIndex} className="code-line" style={{ '--line-delay': `${1.1 + lineIndex * 0.28}s` }}>
              {tokens.map(([className, text], tokenIndex) => (
                <span key={tokenIndex} className={className}>
                  {text}
                </span>
              ))}
            </code>
          ))}
          <span className="code-cursor" />
        </pre>
      </div>

      <div className="stack-trace" aria-hidden="true">
        <div className="stack-track">
          <span className="stack-packet" />
        </div>
        <ul>
          {STACK.map(({ label, icon: Icon }, index) => (
            <li key={label} style={{ '--node-delay': `${index * 0.8}s` }}>
              <span className="stack-node">
                <Icon />
              </span>
              <span className="stack-label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
