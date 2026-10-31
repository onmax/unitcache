export function useArea13State1 (initial = 9) {
  const count = useState<number>('area13-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-1', () => [])
  const grouped = computed(() => groupArea1311(items.value))
  const label = computed(() => formatArea1311(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
