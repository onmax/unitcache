export function useKpisState18 (initial = 7) {
  const count = useState<number>('kpis-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-18', () => [])
  const grouped = computed(() => groupKpis0(items.value))
  const label = computed(() => formatKpis0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
