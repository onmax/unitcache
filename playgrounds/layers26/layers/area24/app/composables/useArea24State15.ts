export function useArea24State15 (initial = 6) {
  const count = useState<number>('area24-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-15', () => [])
  const grouped = computed(() => groupArea246(items.value))
  const label = computed(() => formatArea246(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
