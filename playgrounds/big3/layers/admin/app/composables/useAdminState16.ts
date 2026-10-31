export function useAdminState16 (initial = 7) {
  const count = useState<number>('admin-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-16', () => [])
  const grouped = computed(() => groupAdmin4(items.value))
  const label = computed(() => formatAdmin4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
