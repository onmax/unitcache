export function alarmsRows (n: number, seed = 66) {
  return Array.from({ length: n }, (_, i) => ({ id: `alarms-${i}`, title: `Alarms ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
