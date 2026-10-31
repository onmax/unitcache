export function useQualityState5 (initial = 3) {
  const count = useState<number>('quality-state-5', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-5', () => [])
  const grouped = computed(() => groupQuality10(items.value))
  const label = computed(() => formatQuality10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
