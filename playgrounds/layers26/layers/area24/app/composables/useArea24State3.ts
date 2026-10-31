export function useArea24State3 (initial = 8) {
  const count = useState<number>('area24-state-3', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-3', () => [])
  const grouped = computed(() => groupArea248(items.value))
  const label = computed(() => formatArea248(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
