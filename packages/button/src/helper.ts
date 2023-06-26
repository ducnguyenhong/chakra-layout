export function getClass(data: Record<string, boolean>) {
  return Object.entries(data)
    .map((item) => (item[1] ? item[0] : null))
    .filter((item) => item !== null)
    .join(' ');
}
