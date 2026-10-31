export function useArea15State22 (initial = 3) {
  const count = useState<number>('area15-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area15-items-22', () => [])
  const grouped = computed(() => groupArea156(items.value))
  const label = computed(() => formatArea156(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
