export function settingsRows (n: number, seed = 8) {
  return Array.from({ length: n }, (_, i) => ({ id: `settings-${i}`, title: `Settings ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
