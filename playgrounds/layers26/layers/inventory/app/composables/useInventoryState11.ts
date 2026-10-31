export function useInventoryState11 (initial = 8) {
  const count = useState<number>('inventory-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-11', () => [])
  const grouped = computed(() => groupInventory6(items.value))
  const label = computed(() => formatInventory6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
