export function area18Rows (n: number, seed = 71) {
  return Array.from({ length: n }, (_, i) => ({ id: `area18-${i}`, title: `Area18 ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
