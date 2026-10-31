export function useArea13State29 (initial = 7) {
  const count = useState<number>('area13-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-29', () => [])
  const grouped = computed(() => groupArea1315(items.value))
  const label = computed(() => formatArea1315(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
