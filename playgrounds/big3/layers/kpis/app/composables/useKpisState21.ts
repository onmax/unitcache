export function useKpisState21 (initial = 2) {
  const count = useState<number>('kpis-state-21', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-21', () => [])
  const grouped = computed(() => groupKpis13(items.value))
  const label = computed(() => formatKpis13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
