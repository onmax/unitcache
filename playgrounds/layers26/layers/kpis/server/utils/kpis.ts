export function kpisRows (n: number, seed = 94) {
  return Array.from({ length: n }, (_, i) => ({ id: `kpis-${i}`, title: `Kpis ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
