export function useQualityState28 (initial = 8) {
  const count = useState<number>('quality-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-28', () => [])
  const grouped = computed(() => groupQuality8(items.value))
  const label = computed(() => formatQuality8(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
