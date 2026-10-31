export function useArea21State28 (initial = 0) {
  const count = useState<number>('area21-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area21-items-28', () => [])
  const grouped = computed(() => groupArea211(items.value))
  const label = computed(() => formatArea211(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
