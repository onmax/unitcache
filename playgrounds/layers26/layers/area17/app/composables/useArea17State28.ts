export function useArea17State28 (initial = 5) {
  const count = useState<number>('area17-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area17-items-28', () => [])
  const grouped = computed(() => groupArea1715(items.value))
  const label = computed(() => formatArea1715(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
