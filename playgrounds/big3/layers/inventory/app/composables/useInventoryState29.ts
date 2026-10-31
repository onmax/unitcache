export function useInventoryState29 (initial = 3) {
  const count = useState<number>('inventory-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-29', () => [])
  const grouped = computed(() => groupInventory15(items.value))
  const label = computed(() => formatInventory15(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
