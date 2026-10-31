export function useArea16State24 (initial = 6) {
  const count = useState<number>('area16-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-24', () => [])
  const grouped = computed(() => groupArea164(items.value))
  const label = computed(() => formatArea164(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
