export function useAdminState11 (initial = 3) {
  const count = useState<number>('admin-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-11', () => [])
  const grouped = computed(() => groupAdmin6(items.value))
  const label = computed(() => formatAdmin6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
