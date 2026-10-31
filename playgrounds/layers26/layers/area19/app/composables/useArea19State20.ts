export function useArea19State20 (initial = 1) {
  const count = useState<number>('area19-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area19-items-20', () => [])
  const grouped = computed(() => groupArea191(items.value))
  const label = computed(() => formatArea191(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
