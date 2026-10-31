export function useInventoryState8 (initial = 5) {
  const count = useState<number>('inventory-state-8', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-8', () => [])
  const grouped = computed(() => groupInventory14(items.value))
  const label = computed(() => formatInventory14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
