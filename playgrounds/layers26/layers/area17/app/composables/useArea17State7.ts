export function useArea17State7 (initial = 8) {
  const count = useState<number>('area17-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area17-items-7', () => [])
  const grouped = computed(() => groupArea175(items.value))
  const label = computed(() => formatArea175(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
