export function useAdminState19 (initial = 1) {
  const count = useState<number>('admin-state-19', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-19', () => [])
  const grouped = computed(() => groupAdmin6(items.value))
  const label = computed(() => formatAdmin6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
