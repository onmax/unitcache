export function useArea16State11 (initial = 1) {
  const count = useState<number>('area16-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-11', () => [])
  const grouped = computed(() => groupArea165(items.value))
  const label = computed(() => formatArea165(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
