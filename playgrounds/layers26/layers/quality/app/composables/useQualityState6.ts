export function useQualityState6 (initial = 9) {
  const count = useState<number>('quality-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-6', () => [])
  const grouped = computed(() => groupQuality1(items.value))
  const label = computed(() => formatQuality1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
