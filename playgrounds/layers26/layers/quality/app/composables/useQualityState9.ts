export function useQualityState9 (initial = 0) {
  const count = useState<number>('quality-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-9', () => [])
  const grouped = computed(() => groupQuality7(items.value))
  const label = computed(() => formatQuality7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
