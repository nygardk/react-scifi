function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function cssVendorPrefix(name, value) {
  const prefixes = ['Webkit', 'Moz', 'Ms', 'O'];
  const style = {};
  style[name] = value;
  prefixes.forEach(prefix => style[`${prefix}${capitalize(name)}`] = value);
  return style;
}
