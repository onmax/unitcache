export function useKpisState11 (initial = 3) {
  const count = useState<number>('kpis-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-11', () => [])
  const grouped = computed(() => groupKpis11(items.value))
  const label = computed(() => formatKpis11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
