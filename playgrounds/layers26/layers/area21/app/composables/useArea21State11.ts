export function useArea21State11 (initial = 3) {
  const count = useState<number>('area21-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area21-items-11', () => [])
  const grouped = computed(() => groupArea2111(items.value))
  const label = computed(() => formatArea2111(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
