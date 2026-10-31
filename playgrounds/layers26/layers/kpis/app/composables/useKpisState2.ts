export function useKpisState2 (initial = 0) {
  const count = useState<number>('kpis-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-2', () => [])
  const grouped = computed(() => groupKpis9(items.value))
  const label = computed(() => formatKpis9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
