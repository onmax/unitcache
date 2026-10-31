export function area16Rows (n: number, seed = 44) {
  return Array.from({ length: n }, (_, i) => ({ id: `area16-${i}`, title: `Area16 ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
