export function useKpisState27 (initial = 0) {
  const count = useState<number>('kpis-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-27', () => [])
  const grouped = computed(() => groupKpis4(items.value))
  const label = computed(() => formatKpis4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
