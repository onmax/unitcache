export function useArea13State4 (initial = 0) {
  const count = useState<number>('area13-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-4', () => [])
  const grouped = computed(() => groupArea132(items.value))
  const label = computed(() => formatArea132(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
