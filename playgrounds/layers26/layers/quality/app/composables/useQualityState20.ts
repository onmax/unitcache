export function useQualityState20 (initial = 8) {
  const count = useState<number>('quality-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-20', () => [])
  const grouped = computed(() => groupQuality15(items.value))
  const label = computed(() => formatQuality15(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
