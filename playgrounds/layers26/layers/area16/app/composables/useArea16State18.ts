export function useArea16State18 (initial = 5) {
  const count = useState<number>('area16-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-18', () => [])
  const grouped = computed(() => groupArea1613(items.value))
  const label = computed(() => formatArea1613(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
