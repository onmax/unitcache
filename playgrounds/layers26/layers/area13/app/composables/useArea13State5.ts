export function useArea13State5 (initial = 8) {
  const count = useState<number>('area13-state-5', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-5', () => [])
  const grouped = computed(() => groupArea1314(items.value))
  const label = computed(() => formatArea1314(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
