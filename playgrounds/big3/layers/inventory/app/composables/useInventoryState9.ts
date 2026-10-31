export function useInventoryState9 (initial = 1) {
  const count = useState<number>('inventory-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-9', () => [])
  const grouped = computed(() => groupInventory9(items.value))
  const label = computed(() => formatInventory9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
