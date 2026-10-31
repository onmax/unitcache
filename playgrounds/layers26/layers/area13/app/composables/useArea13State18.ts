export function useArea13State18 (initial = 6) {
  const count = useState<number>('area13-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-18', () => [])
  const grouped = computed(() => groupArea1310(items.value))
  const label = computed(() => formatArea1310(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
