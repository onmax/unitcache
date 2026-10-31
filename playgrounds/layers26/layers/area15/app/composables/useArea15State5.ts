export function useArea15State5 (initial = 1) {
  const count = useState<number>('area15-state-5', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area15-items-5', () => [])
  const grouped = computed(() => groupArea1513(items.value))
  const label = computed(() => formatArea1513(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
