export function useArea24State6 (initial = 0) {
  const count = useState<number>('area24-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-6', () => [])
  const grouped = computed(() => groupArea2411(items.value))
  const label = computed(() => formatArea2411(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
