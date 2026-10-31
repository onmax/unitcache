export function useArea24State24 (initial = 1) {
  const count = useState<number>('area24-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-24', () => [])
  const grouped = computed(() => groupArea240(items.value))
  const label = computed(() => formatArea240(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
