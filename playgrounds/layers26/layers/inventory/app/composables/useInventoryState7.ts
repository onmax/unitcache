export function useInventoryState7 (initial = 0) {
  const count = useState<number>('inventory-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-7', () => [])
  const grouped = computed(() => groupInventory0(items.value))
  const label = computed(() => formatInventory0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
