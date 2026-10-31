export function useArea16State28 (initial = 4) {
  const count = useState<number>('area16-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-28', () => [])
  const grouped = computed(() => groupArea164(items.value))
  const label = computed(() => formatArea164(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
