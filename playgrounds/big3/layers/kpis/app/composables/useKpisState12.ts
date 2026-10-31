export function useKpisState12 (initial = 0) {
  const count = useState<number>('kpis-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-12', () => [])
  const grouped = computed(() => groupKpis14(items.value))
  const label = computed(() => formatKpis14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
