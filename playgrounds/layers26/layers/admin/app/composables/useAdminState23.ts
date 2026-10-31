export function useAdminState23 (initial = 1) {
  const count = useState<number>('admin-state-23', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-23', () => [])
  const grouped = computed(() => groupAdmin2(items.value))
  const label = computed(() => formatAdmin2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
