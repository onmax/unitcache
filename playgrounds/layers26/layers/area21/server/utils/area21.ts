export function area21Rows (n: number, seed = 8) {
  return Array.from({ length: n }, (_, i) => ({ id: `area21-${i}`, title: `Area21 ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
