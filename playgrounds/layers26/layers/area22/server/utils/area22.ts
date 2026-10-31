export function area22Rows (n: number, seed = 21) {
  return Array.from({ length: n }, (_, i) => ({ id: `area22-${i}`, title: `Area22 ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
