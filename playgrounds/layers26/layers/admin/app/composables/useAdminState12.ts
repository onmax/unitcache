export function useAdminState12 (initial = 3) {
  const count = useState<number>('admin-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-12', () => [])
  const grouped = computed(() => groupAdmin7(items.value))
  const label = computed(() => formatAdmin7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
