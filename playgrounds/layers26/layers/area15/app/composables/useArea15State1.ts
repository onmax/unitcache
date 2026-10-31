export function useArea15State1 (initial = 3) {
  const count = useState<number>('area15-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area15-items-1', () => [])
  const grouped = computed(() => groupArea150(items.value))
  const label = computed(() => formatArea150(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
