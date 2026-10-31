export function useAdminState24 (initial = 3) {
  const count = useState<number>('admin-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('admin-items-24', () => [])
  const grouped = computed(() => groupAdmin13(items.value))
  const label = computed(() => formatAdmin13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
