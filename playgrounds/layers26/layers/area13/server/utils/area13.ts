export function area13Rows (n: number, seed = 3) {
  return Array.from({ length: n }, (_, i) => ({ id: `area13-${i}`, title: `Area13 ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
