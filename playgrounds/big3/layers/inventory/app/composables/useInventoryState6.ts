export function useInventoryState6 (initial = 8) {
  const count = useState<number>('inventory-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-6', () => [])
  const grouped = computed(() => groupInventory0(items.value))
  const label = computed(() => formatInventory0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
