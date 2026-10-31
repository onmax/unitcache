export function useInventoryState20 (initial = 0) {
  const count = useState<number>('inventory-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-20', () => [])
  const grouped = computed(() => groupInventory7(items.value))
  const label = computed(() => formatInventory7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
