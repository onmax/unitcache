export function useArea20State28 (initial = 5) {
  const count = useState<number>('area20-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-28', () => [])
  const grouped = computed(() => groupArea205(items.value))
  const label = computed(() => formatArea205(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
