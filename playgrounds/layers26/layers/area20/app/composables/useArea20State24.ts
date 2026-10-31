export function useArea20State24 (initial = 8) {
  const count = useState<number>('area20-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-24', () => [])
  const grouped = computed(() => groupArea200(items.value))
  const label = computed(() => formatArea200(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
