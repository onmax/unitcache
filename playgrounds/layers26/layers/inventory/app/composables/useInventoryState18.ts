export function useInventoryState18 (initial = 6) {
  const count = useState<number>('inventory-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-18', () => [])
  const grouped = computed(() => groupInventory1(items.value))
  const label = computed(() => formatInventory1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
