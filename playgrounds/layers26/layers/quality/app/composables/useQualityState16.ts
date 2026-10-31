export function useQualityState16 (initial = 4) {
  const count = useState<number>('quality-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-16', () => [])
  const grouped = computed(() => groupQuality3(items.value))
  const label = computed(() => formatQuality3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
