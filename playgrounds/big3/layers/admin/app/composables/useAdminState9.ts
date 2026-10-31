export function useAdminState9 (initial = 4) {
  const count = useState<number>('admin-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-9', () => [])
  const grouped = computed(() => groupAdmin8(items.value))
  const label = computed(() => formatAdmin8(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
