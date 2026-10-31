export function useAdminState14 (initial = 1) {
  const count = useState<number>('admin-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-14', () => [])
  const grouped = computed(() => groupAdmin12(items.value))
  const label = computed(() => formatAdmin12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
