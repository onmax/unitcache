export function useAdminState29 (initial = 0) {
  const count = useState<number>('admin-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-29', () => [])
  const grouped = computed(() => groupAdmin10(items.value))
  const label = computed(() => formatAdmin10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
