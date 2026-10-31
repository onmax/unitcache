export function useArea16State16 (initial = 4) {
  const count = useState<number>('area16-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-16', () => [])
  const grouped = computed(() => groupArea167(items.value))
  const label = computed(() => formatArea167(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
