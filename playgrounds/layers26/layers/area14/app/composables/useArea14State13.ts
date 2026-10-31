export function useArea14State13 (initial = 9) {
  const count = useState<number>('area14-state-13', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-13', () => [])
  const grouped = computed(() => groupArea142(items.value))
  const label = computed(() => formatArea142(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
