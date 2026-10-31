export function useArea17State2 (initial = 2) {
  const count = useState<number>('area17-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area17-items-2', () => [])
  const grouped = computed(() => groupArea178(items.value))
  const label = computed(() => formatArea178(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
