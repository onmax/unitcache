export function useArea13State3 (initial = 2) {
  const count = useState<number>('area13-state-3', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-3', () => [])
  const grouped = computed(() => groupArea133(items.value))
  const label = computed(() => formatArea133(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
