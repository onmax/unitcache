export function useArea24State22 (initial = 4) {
  const count = useState<number>('area24-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-22', () => [])
  const grouped = computed(() => groupArea2411(items.value))
  const label = computed(() => formatArea2411(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
