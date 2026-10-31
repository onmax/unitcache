export function useInventoryState24 (initial = 4) {
  const count = useState<number>('inventory-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-24', () => [])
  const grouped = computed(() => groupInventory10(items.value))
  const label = computed(() => formatInventory10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
