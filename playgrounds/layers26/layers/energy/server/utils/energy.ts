export function energyRows (n: number, seed = 49) {
  return Array.from({ length: n }, (_, i) => ({ id: `energy-${i}`, title: `Energy ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
