export function useKpisState23 (initial = 4) {
  const count = useState<number>('kpis-state-23', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-23', () => [])
  const grouped = computed(() => groupKpis1(items.value))
  const label = computed(() => formatKpis1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
