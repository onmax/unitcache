export function useArea15State27 (initial = 5) {
  const count = useState<number>('area15-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area15-items-27', () => [])
  const grouped = computed(() => groupArea157(items.value))
  const label = computed(() => formatArea157(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
