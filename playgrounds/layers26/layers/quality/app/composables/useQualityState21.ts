export function useQualityState21 (initial = 0) {
  const count = useState<number>('quality-state-21', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-21', () => [])
  const grouped = computed(() => groupQuality9(items.value))
  const label = computed(() => formatQuality9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
