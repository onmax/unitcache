export function useKpisState17 (initial = 6) {
  const count = useState<number>('kpis-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-17', () => [])
  const grouped = computed(() => groupKpis14(items.value))
  const label = computed(() => formatKpis14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
