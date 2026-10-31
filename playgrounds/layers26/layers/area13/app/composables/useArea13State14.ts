export function useArea13State14 (initial = 2) {
  const count = useState<number>('area13-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-14', () => [])
  const grouped = computed(() => groupArea139(items.value))
  const label = computed(() => formatArea139(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
