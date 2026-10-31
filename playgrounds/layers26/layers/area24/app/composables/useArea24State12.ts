export function useArea24State12 (initial = 6) {
  const count = useState<number>('area24-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-12', () => [])
  const grouped = computed(() => groupArea2412(items.value))
  const label = computed(() => formatArea2412(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
