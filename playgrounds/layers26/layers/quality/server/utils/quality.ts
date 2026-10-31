export function qualityRows (n: number, seed = 70) {
  return Array.from({ length: n }, (_, i) => ({ id: `quality-${i}`, title: `Quality ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
