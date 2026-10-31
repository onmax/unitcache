export function auditRows (n: number, seed = 43) {
  return Array.from({ length: n }, (_, i) => ({ id: `audit-${i}`, title: `Audit ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
