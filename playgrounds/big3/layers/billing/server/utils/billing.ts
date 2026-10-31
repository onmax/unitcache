export function billingRows (n: number, seed = 25) {
  return Array.from({ length: n }, (_, i) => ({ id: `billing-${i}`, title: `Billing ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
