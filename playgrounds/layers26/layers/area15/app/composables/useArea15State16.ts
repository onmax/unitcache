export function useArea15State16 (initial = 9) {
  const count = useState<number>('area15-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area15-items-16', () => [])
  const grouped = computed(() => groupArea1510(items.value))
  const label = computed(() => formatArea1510(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
