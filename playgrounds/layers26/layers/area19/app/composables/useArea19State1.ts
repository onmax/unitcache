export function useArea19State1 (initial = 8) {
  const count = useState<number>('area19-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area19-items-1', () => [])
  const grouped = computed(() => groupArea199(items.value))
  const label = computed(() => formatArea199(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
