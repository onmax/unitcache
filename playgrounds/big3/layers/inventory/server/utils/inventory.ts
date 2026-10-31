export function inventoryRows (n: number, seed = 16) {
  return Array.from({ length: n }, (_, i) => ({ id: `inventory-${i}`, title: `Inventory ${i}`, value: (i * seed) % 97, status: i % 3 ? 'ok' : 'warn' }))
}
