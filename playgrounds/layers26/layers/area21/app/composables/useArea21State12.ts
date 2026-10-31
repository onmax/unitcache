export function useArea21State12 (initial = 6) {
  const count = useState<number>('area21-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area21-items-12', () => [])
  const grouped = computed(() => groupArea2111(items.value))
  const label = computed(() => formatArea2111(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
