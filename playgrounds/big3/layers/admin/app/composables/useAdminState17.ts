export function useAdminState17 (initial = 8) {
  const count = useState<number>('admin-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-17', () => [])
  const grouped = computed(() => groupAdmin0(items.value))
  const label = computed(() => formatAdmin0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
