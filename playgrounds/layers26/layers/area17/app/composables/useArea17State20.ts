export function useArea17State20 (initial = 8) {
  const count = useState<number>('area17-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area17-items-20', () => [])
  const grouped = computed(() => groupArea171(items.value))
  const label = computed(() => formatArea171(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
