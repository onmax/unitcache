export function area20Rows (n: number, seed = 76) {
  return Array.from({ length: n }, (_, i) => ({ id: `area20-${i}`, title: `Area20 ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
