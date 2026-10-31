export function useArea14State2 (initial = 8) {
  const count = useState<number>('area14-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-2', () => [])
  const grouped = computed(() => groupArea140(items.value))
  const label = computed(() => formatArea140(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
