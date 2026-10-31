export function useArea17State11 (initial = 6) {
  const count = useState<number>('area17-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area17-items-11', () => [])
  const grouped = computed(() => groupArea178(items.value))
  const label = computed(() => formatArea178(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
