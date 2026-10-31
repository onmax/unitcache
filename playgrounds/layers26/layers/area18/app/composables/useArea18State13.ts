export function useArea18State13 (initial = 5) {
  const count = useState<number>('area18-state-13', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-13', () => [])
  const grouped = computed(() => groupArea189(items.value))
  const label = computed(() => formatArea189(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
