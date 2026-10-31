export function useArea17State3 (initial = 7) {
  const count = useState<number>('area17-state-3', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area17-items-3', () => [])
  const grouped = computed(() => groupArea179(items.value))
  const label = computed(() => formatArea179(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
