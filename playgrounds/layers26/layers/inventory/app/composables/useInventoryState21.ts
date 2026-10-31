export function useInventoryState21 (initial = 4) {
  const count = useState<number>('inventory-state-21', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-21', () => [])
  const grouped = computed(() => groupInventory11(items.value))
  const label = computed(() => formatInventory11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
