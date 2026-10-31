export function useArea13State7 (initial = 2) {
  const count = useState<number>('area13-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-7', () => [])
  const grouped = computed(() => groupArea136(items.value))
  const label = computed(() => formatArea136(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
