export function area15Rows (n: number, seed = 76) {
  return Array.from({ length: n }, (_, i) => ({ id: `area15-${i}`, title: `Area15 ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
