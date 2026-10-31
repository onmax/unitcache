export function area23Rows (n: number, seed = 69) {
  return Array.from({ length: n }, (_, i) => ({ id: `area23-${i}`, title: `Area23 ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
