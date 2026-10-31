export function dashboardRows (n: number, seed = 55) {
  return Array.from({ length: n }, (_, i) => ({ id: `dashboard-${i}`, title: `Dashboard ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
