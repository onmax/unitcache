export function useArea21State13 (initial = 1) {
  const count = useState<number>('area21-state-13', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area21-items-13', () => [])
  const grouped = computed(() => groupArea217(items.value))
  const label = computed(() => formatArea217(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
