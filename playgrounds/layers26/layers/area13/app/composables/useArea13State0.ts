export function useArea13State0 (initial = 1) {
  const count = useState<number>('area13-state-0', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-0', () => [])
  const grouped = computed(() => groupArea134(items.value))
  const label = computed(() => formatArea134(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
