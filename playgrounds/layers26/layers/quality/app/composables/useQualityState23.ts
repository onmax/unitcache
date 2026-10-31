export function useQualityState23 (initial = 4) {
  const count = useState<number>('quality-state-23', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-23', () => [])
  const grouped = computed(() => groupQuality2(items.value))
  const label = computed(() => formatQuality2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
