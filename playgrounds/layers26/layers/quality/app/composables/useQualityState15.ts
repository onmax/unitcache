export function useQualityState15 (initial = 5) {
  const count = useState<number>('quality-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-15', () => [])
  const grouped = computed(() => groupQuality12(items.value))
  const label = computed(() => formatQuality12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
