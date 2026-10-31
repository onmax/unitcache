export function area24Rows (n: number, seed = 18) {
  return Array.from({ length: n }, (_, i) => ({ id: `area24-${i}`, title: `Area24 ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
