export function area14Rows (n: number, seed = 88) {
  return Array.from({ length: n }, (_, i) => ({ id: `area14-${i}`, title: `Area14 ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
