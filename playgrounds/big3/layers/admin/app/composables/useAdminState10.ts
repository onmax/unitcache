export function useAdminState10 (initial = 2) {
  const count = useState<number>('admin-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-10', () => [])
  const grouped = computed(() => groupAdmin5(items.value))
  const label = computed(() => formatAdmin5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
