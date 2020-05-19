export function limit(limit = 1) {
  return (_, i) => i < limit;
}
