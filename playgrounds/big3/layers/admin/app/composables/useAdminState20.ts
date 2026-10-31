export function useAdminState20 (initial = 6) {
  const count = useState<number>('admin-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-20', () => [])
  const grouped = computed(() => groupAdmin14(items.value))
  const label = computed(() => formatAdmin14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
