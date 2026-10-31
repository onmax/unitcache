export function useArea16State0 (initial = 0) {
  const count = useState<number>('area16-state-0', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-0', () => [])
  const grouped = computed(() => groupArea162(items.value))
  const label = computed(() => formatArea162(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
