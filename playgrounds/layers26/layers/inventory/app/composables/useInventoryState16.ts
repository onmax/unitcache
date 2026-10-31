export function useInventoryState16 (initial = 2) {
  const count = useState<number>('inventory-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-16', () => [])
  const grouped = computed(() => groupInventory2(items.value))
  const label = computed(() => formatInventory2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
