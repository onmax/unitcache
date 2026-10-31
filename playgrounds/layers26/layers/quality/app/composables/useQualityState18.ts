export function useQualityState18 (initial = 9) {
  const count = useState<number>('quality-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-18', () => [])
  const grouped = computed(() => groupQuality10(items.value))
  const label = computed(() => formatQuality10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
