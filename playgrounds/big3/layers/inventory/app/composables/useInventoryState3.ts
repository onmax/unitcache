export function useInventoryState3 (initial = 2) {
  const count = useState<number>('inventory-state-3', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-3', () => [])
  const grouped = computed(() => groupInventory6(items.value))
  const label = computed(() => formatInventory6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
