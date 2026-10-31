export function area17Rows (n: number, seed = 70) {
  return Array.from({ length: n }, (_, i) => ({ id: `area17-${i}`, title: `Area17 ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
