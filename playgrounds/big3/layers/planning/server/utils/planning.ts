export function planningRows (n: number, seed = 80) {
  return Array.from({ length: n }, (_, i) => ({ id: `planning-${i}`, title: `Planning ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
