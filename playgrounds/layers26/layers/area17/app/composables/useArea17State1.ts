export function useArea17State1 (initial = 4) {
  const count = useState<number>('area17-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area17-items-1', () => [])
  const grouped = computed(() => groupArea173(items.value))
  const label = computed(() => formatArea173(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
