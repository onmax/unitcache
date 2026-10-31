export function useAdminState21 (initial = 8) {
  const count = useState<number>('admin-state-21', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-21', () => [])
  const grouped = computed(() => groupAdmin8(items.value))
  const label = computed(() => formatAdmin8(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
