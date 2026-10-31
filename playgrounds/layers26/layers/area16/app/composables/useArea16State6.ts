export function useArea16State6 (initial = 4) {
  const count = useState<number>('area16-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-6', () => [])
  const grouped = computed(() => groupArea1610(items.value))
  const label = computed(() => formatArea1610(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
