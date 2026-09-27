import { isPlaceholder } from '../utils/links.js';

/**
 * Button-styled link. When `href` is missing or still an "ADD_..." placeholder it
 * renders an inactive button instead of a broken link.
 */
export default function ActionLink({
  href,
  variant = 'primary',
  icon: Icon,
  external = false,
  hint = 'Not set yet. Add this link in src/config/site.js',
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn-${variant} ${className}`.trim();
  const content = (
    <>
      {Icon && <Icon aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (isPlaceholder(href)) {
    return (
      <button type="button" className={`${classes} is-pending`} aria-disabled="true" title={hint}>
        {content}
      </button>
    );
  }

  return (
    <a
      className={classes}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {content}
    </a>
  );
}
