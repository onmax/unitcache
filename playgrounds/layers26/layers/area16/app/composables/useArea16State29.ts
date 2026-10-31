export function useArea16State29 (initial = 8) {
  const count = useState<number>('area16-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-29', () => [])
  const grouped = computed(() => groupArea168(items.value))
  const label = computed(() => formatArea168(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
