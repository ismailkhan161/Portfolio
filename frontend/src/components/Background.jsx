import ParticleField from './ParticleField.jsx';

export default function Background() {
  return (
    <div className="background" aria-hidden="true">
      <div className="bg-glow bg-glow-a" />
      <div className="bg-glow bg-glow-b" />
      <div className="bg-grid" />
      <ParticleField />
    </div>
  );
}
