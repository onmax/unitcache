export function useAdminState15 (initial = 3) {
  const count = useState<number>('admin-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-15', () => [])
  const grouped = computed(() => groupAdmin10(items.value))
  const label = computed(() => formatAdmin10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
