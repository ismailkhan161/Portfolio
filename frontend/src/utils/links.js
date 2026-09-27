/** A value is a placeholder when it is empty or starts with "ADD_". */
export function isPlaceholder(value) {
  return !value || String(value).startsWith('ADD_');
}

/** Turn an email address into a mailto: link; leave URLs untouched. */
export function toHref(value, { email = false } = {}) {
  if (isPlaceholder(value)) return null;
  return email ? `mailto:${value}` : value;
}
