export function useQualityState2 (initial = 2) {
  const count = useState<number>('quality-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-2', () => [])
  const grouped = computed(() => groupQuality0(items.value))
  const label = computed(() => formatQuality0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
