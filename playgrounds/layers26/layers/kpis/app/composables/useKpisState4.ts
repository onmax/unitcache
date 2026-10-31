export function useKpisState4 (initial = 5) {
  const count = useState<number>('kpis-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-4', () => [])
  const grouped = computed(() => groupKpis7(items.value))
  const label = computed(() => formatKpis7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
