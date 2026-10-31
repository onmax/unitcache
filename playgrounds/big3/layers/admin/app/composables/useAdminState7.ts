export function useAdminState7 (initial = 9) {
  const count = useState<number>('admin-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-7', () => [])
  const grouped = computed(() => groupAdmin2(items.value))
  const label = computed(() => formatAdmin2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
