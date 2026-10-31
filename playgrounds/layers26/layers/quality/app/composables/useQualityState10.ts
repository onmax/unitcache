export function useQualityState10 (initial = 7) {
  const count = useState<number>('quality-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-10', () => [])
  const grouped = computed(() => groupQuality15(items.value))
  const label = computed(() => formatQuality15(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
