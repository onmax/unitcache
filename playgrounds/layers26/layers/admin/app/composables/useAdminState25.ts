export function useAdminState25 (initial = 4) {
  const count = useState<number>('admin-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-25', () => [])
  const grouped = computed(() => groupAdmin6(items.value))
  const label = computed(() => formatAdmin6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
