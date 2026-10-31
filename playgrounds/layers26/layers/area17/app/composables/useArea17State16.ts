export function useArea17State16 (initial = 0) {
  const count = useState<number>('area17-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area17-items-16', () => [])
  const grouped = computed(() => groupArea175(items.value))
  const label = computed(() => formatArea175(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
