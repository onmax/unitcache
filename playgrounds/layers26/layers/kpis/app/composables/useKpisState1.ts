export function useKpisState1 (initial = 2) {
  const count = useState<number>('kpis-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-1', () => [])
  const grouped = computed(() => groupKpis12(items.value))
  const label = computed(() => formatKpis12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
