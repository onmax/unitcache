export function useArea16State26 (initial = 9) {
  const count = useState<number>('area16-state-26', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-26', () => [])
  const grouped = computed(() => groupArea1610(items.value))
  const label = computed(() => formatArea1610(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
