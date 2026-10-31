export function useArea16State2 (initial = 5) {
  const count = useState<number>('area16-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-2', () => [])
  const grouped = computed(() => groupArea167(items.value))
  const label = computed(() => formatArea167(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
