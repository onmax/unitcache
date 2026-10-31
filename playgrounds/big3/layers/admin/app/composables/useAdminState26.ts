export function useAdminState26 (initial = 5) {
  const count = useState<number>('admin-state-26', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-26', () => [])
  const grouped = computed(() => groupAdmin0(items.value))
  const label = computed(() => formatAdmin0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
