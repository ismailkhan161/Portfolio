/**
 * Illustrated project covers (not real screenshots). Set `image` on a project to use a
 * real picture instead; see data/projects.js.
 */
function ClinicCover() {
  return (
    <svg className="cover-svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of a clinic dashboard">
      <rect className="cv-bg" width="400" height="240" />
      <rect className="cv-panel" x="16" y="16" width="368" height="208" rx="14" />
      <rect className="cv-side" x="16" y="16" width="62" height="208" rx="14" />
      <circle className="cv-accent" cx="47" cy="46" r="10" />
      <rect className="cv-line" x="35" y="78" width="24" height="6" rx="3" />
      <rect className="cv-line" x="35" y="98" width="24" height="6" rx="3" />
      <rect className="cv-line" x="35" y="118" width="24" height="6" rx="3" />
      <rect className="cv-line" x="94" y="34" width="120" height="10" rx="5" />
      <circle className="cv-line" cx="360" cy="39" r="9" />

      <rect className="cv-card" x="94" y="58" width="86" height="48" rx="8" />
      <rect className="cv-card" x="190" y="58" width="86" height="48" rx="8" />
      <rect className="cv-card" x="286" y="58" width="82" height="48" rx="8" />
      <rect className="cv-accent" x="104" y="68" width="30" height="6" rx="3" />
      <rect className="cv-line" x="104" y="84" width="50" height="10" rx="4" />
      <rect className="cv-accent" x="200" y="68" width="30" height="6" rx="3" />
      <rect className="cv-line" x="200" y="84" width="40" height="10" rx="4" />
      <rect className="cv-accent" x="296" y="68" width="30" height="6" rx="3" />
      <rect className="cv-line" x="296" y="84" width="46" height="10" rx="4" />

      <rect className="cv-card" x="94" y="116" width="274" height="60" rx="8" />
      <polyline
        className="cv-stroke"
        points="106,164 140,148 172,156 210,134 246,142 284,124 322,132 356,126"
        fill="none"
      />

      <rect className="cv-card" x="94" y="186" width="274" height="24" rx="8" />
      <circle className="cv-accent" cx="110" cy="198" r="5" />
      <rect className="cv-line" x="124" y="195" width="90" height="6" rx="3" />
      <rect className="cv-line" x="320" y="195" width="36" height="6" rx="3" />
    </svg>
  );
}

function StoreCover() {
  return (
    <svg className="cover-svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of an online store">
      <rect className="cv-bg" width="400" height="240" />
      <rect className="cv-panel" x="16" y="16" width="368" height="208" rx="14" />
      <circle className="cv-accent" cx="40" cy="42" r="10" />
      <rect className="cv-card" x="62" y="32" width="220" height="20" rx="10" />
      <rect className="cv-line" x="76" y="40" width="70" height="5" rx="2.5" />
      <rect className="cv-card" x="332" y="32" width="36" height="20" rx="10" />
      <circle className="cv-accent" cx="350" cy="42" r="5" />

      <rect className="cv-banner" x="32" y="66" width="336" height="44" rx="10" />
      <rect className="cv-on-accent" x="48" y="80" width="120" height="8" rx="4" />
      <rect className="cv-on-accent-soft" x="48" y="94" width="76" height="6" rx="3" />

      <g>
        <rect className="cv-card" x="32" y="122" width="76" height="90" rx="8" />
        <rect className="cv-line" x="40" y="130" width="60" height="42" rx="6" />
        <rect className="cv-line" x="40" y="180" width="44" height="6" rx="3" />
        <rect className="cv-accent" x="40" y="194" width="26" height="8" rx="4" />
      </g>
      <g>
        <rect className="cv-card" x="120" y="122" width="76" height="90" rx="8" />
        <rect className="cv-line" x="128" y="130" width="60" height="42" rx="6" />
        <rect className="cv-line" x="128" y="180" width="52" height="6" rx="3" />
        <rect className="cv-accent" x="128" y="194" width="26" height="8" rx="4" />
      </g>
      <g>
        <rect className="cv-card" x="208" y="122" width="76" height="90" rx="8" />
        <rect className="cv-line" x="216" y="130" width="60" height="42" rx="6" />
        <rect className="cv-line" x="216" y="180" width="40" height="6" rx="3" />
        <rect className="cv-accent" x="216" y="194" width="26" height="8" rx="4" />
      </g>
      <g>
        <rect className="cv-card" x="296" y="122" width="72" height="90" rx="8" />
        <rect className="cv-line" x="304" y="130" width="56" height="42" rx="6" />
        <rect className="cv-line" x="304" y="180" width="46" height="6" rx="3" />
        <rect className="cv-accent" x="304" y="194" width="26" height="8" rx="4" />
      </g>
    </svg>
  );
}

const COVERS = { clinic: ClinicCover, store: StoreCover };

export default function ProjectCover({ project }) {
  if (project.image) {
    return <img className="cover-image" src={project.image} alt={`${project.name} preview`} loading="lazy" decoding="async" />;
  }
  const Cover = COVERS[project.cover] || ClinicCover;
  return <Cover />;
}
