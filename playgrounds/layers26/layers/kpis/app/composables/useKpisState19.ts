export function useKpisState19 (initial = 2) {
  const count = useState<number>('kpis-state-19', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-19', () => [])
  const grouped = computed(() => groupKpis2(items.value))
  const label = computed(() => formatKpis2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
