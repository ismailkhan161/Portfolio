export default function Loader({ leaving }) {
  return (
    <div className={`loader ${leaving ? 'is-leaving' : ''}`} aria-hidden="true">
      <div className="loader-mark">IK</div>
      <div className="loader-bar">
        <span />
      </div>
    </div>
  );
}
