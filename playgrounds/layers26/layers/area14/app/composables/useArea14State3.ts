export function useArea14State3 (initial = 3) {
  const count = useState<number>('area14-state-3', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-3', () => [])
  const grouped = computed(() => groupArea1415(items.value))
  const label = computed(() => formatArea1415(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
