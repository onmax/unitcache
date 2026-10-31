export function useKpisState16 (initial = 0) {
  const count = useState<number>('kpis-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('kpis-items-16', () => [])
  const grouped = computed(() => groupKpis10(items.value))
  const label = computed(() => formatKpis10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
