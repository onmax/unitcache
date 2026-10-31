export function useInventoryState10 (initial = 8) {
  const count = useState<number>('inventory-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-10', () => [])
  const grouped = computed(() => groupInventory9(items.value))
  const label = computed(() => formatInventory9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
