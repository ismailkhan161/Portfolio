export default function SectionHeading({ id, title, children }) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
