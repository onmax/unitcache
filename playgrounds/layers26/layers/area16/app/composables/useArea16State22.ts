export function useArea16State22 (initial = 8) {
  const count = useState<number>('area16-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-22', () => [])
  const grouped = computed(() => groupArea1611(items.value))
  const label = computed(() => formatArea1611(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
