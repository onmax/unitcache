export function useArea18State24 (initial = 8) {
  const count = useState<number>('area18-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-24', () => [])
  const grouped = computed(() => groupArea180(items.value))
  const label = computed(() => formatArea180(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
