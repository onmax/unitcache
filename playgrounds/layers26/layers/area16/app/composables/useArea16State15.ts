export function useArea16State15 (initial = 5) {
  const count = useState<number>('area16-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-15', () => [])
  const grouped = computed(() => groupArea168(items.value))
  const label = computed(() => formatArea168(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
