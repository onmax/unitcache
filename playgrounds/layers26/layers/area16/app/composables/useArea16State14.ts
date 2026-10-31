export function useArea16State14 (initial = 7) {
  const count = useState<number>('area16-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-14', () => [])
  const grouped = computed(() => groupArea1615(items.value))
  const label = computed(() => formatArea1615(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
