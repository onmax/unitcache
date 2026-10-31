export function useQualityState29 (initial = 9) {
  const count = useState<number>('quality-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-29', () => [])
  const grouped = computed(() => groupQuality13(items.value))
  const label = computed(() => formatQuality13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
