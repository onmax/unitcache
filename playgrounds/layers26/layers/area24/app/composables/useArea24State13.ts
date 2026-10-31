export function useArea24State13 (initial = 2) {
  const count = useState<number>('area24-state-13', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-13', () => [])
  const grouped = computed(() => groupArea2410(items.value))
  const label = computed(() => formatArea2410(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
