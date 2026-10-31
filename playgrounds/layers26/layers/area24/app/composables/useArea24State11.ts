export function useArea24State11 (initial = 4) {
  const count = useState<number>('area24-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-11', () => [])
  const grouped = computed(() => groupArea2414(items.value))
  const label = computed(() => formatArea2414(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
