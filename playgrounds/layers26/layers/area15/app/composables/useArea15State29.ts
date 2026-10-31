export function useArea15State29 (initial = 6) {
  const count = useState<number>('area15-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area15-items-29', () => [])
  const grouped = computed(() => groupArea1514(items.value))
  const label = computed(() => formatArea1514(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
