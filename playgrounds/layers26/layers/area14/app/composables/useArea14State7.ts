export function useArea14State7 (initial = 1) {
  const count = useState<number>('area14-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-7', () => [])
  const grouped = computed(() => groupArea1414(items.value))
  const label = computed(() => formatArea1414(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
