export function useArea24State26 (initial = 5) {
  const count = useState<number>('area24-state-26', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-26', () => [])
  const grouped = computed(() => groupArea2412(items.value))
  const label = computed(() => formatArea2412(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
