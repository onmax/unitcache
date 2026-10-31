export function useArea13State16 (initial = 9) {
  const count = useState<number>('area13-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-16', () => [])
  const grouped = computed(() => groupArea1314(items.value))
  const label = computed(() => formatArea1314(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
