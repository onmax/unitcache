export function reportsRows (n: number, seed = 33) {
  return Array.from({ length: n }, (_, i) => ({ id: `reports-${i}`, title: `Reports ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
