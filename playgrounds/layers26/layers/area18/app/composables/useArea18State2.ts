export function useArea18State2 (initial = 0) {
  const count = useState<number>('area18-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-2', () => [])
  const grouped = computed(() => groupArea184(items.value))
  const label = computed(() => formatArea184(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
