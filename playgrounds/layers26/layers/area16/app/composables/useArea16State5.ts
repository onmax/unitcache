export function useArea16State5 (initial = 5) {
  const count = useState<number>('area16-state-5', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-5', () => [])
  const grouped = computed(() => groupArea163(items.value))
  const label = computed(() => formatArea163(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
