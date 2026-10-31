export function useArea24State18 (initial = 2) {
  const count = useState<number>('area24-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-18', () => [])
  const grouped = computed(() => groupArea243(items.value))
  const label = computed(() => formatArea243(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
