export function useInventoryState0 (initial = 0) {
  const count = useState<number>('inventory-state-0', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('inventory-items-0', () => [])
  const grouped = computed(() => groupInventory3(items.value))
  const label = computed(() => formatInventory3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
