export function useKpisState28 (initial = 5) {
  const count = useState<number>('kpis-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-28', () => [])
  const grouped = computed(() => groupKpis13(items.value))
  const label = computed(() => formatKpis13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
