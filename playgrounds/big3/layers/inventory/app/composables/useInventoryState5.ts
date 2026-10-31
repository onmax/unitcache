export function useInventoryState5 (initial = 0) {
  const count = useState<number>('inventory-state-5', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-5', () => [])
  const grouped = computed(() => groupInventory5(items.value))
  const label = computed(() => formatInventory5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
