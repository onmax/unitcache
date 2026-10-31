export function area19Rows (n: number, seed = 45) {
  return Array.from({ length: n }, (_, i) => ({ id: `area19-${i}`, title: `Area19 ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
