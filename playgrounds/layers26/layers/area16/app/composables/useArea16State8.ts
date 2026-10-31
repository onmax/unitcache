export function useArea16State8 (initial = 0) {
  const count = useState<number>('area16-state-8', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-8', () => [])
  const grouped = computed(() => groupArea163(items.value))
  const label = computed(() => formatArea163(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
