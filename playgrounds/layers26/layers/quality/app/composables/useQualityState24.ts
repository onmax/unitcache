export function useQualityState24 (initial = 0) {
  const count = useState<number>('quality-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('quality-items-24', () => [])
  const grouped = computed(() => groupQuality5(items.value))
  const label = computed(() => formatQuality5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
