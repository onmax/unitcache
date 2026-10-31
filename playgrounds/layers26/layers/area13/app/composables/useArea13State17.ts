export function useArea13State17 (initial = 5) {
  const count = useState<number>('area13-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-17', () => [])
  const grouped = computed(() => groupArea1313(items.value))
  const label = computed(() => formatArea1313(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
