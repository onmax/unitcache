export function useKpisState10 (initial = 2) {
  const count = useState<number>('kpis-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-10', () => [])
  const grouped = computed(() => groupKpis3(items.value))
  const label = computed(() => formatKpis3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
