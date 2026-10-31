export function useArea15State15 (initial = 2) {
  const count = useState<number>('area15-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area15-items-15', () => [])
  const grouped = computed(() => groupArea157(items.value))
  const label = computed(() => formatArea157(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
