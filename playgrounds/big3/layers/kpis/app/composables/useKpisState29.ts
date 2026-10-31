export function useKpisState29 (initial = 1) {
  const count = useState<number>('kpis-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-29', () => [])
  const grouped = computed(() => groupKpis6(items.value))
  const label = computed(() => formatKpis6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
