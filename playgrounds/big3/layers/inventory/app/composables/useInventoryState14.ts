export function useInventoryState14 (initial = 4) {
  const count = useState<number>('inventory-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-14', () => [])
  const grouped = computed(() => groupInventory12(items.value))
  const label = computed(() => formatInventory12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
