export function adminRows (n: number, seed = 87) {
  return Array.from({ length: n }, (_, i) => ({ id: `admin-${i}`, title: `Admin ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
