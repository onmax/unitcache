export function useArea21State16 (initial = 8) {
  const count = useState<number>('area21-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area21-items-16', () => [])
  const grouped = computed(() => groupArea2112(items.value))
  const label = computed(() => formatArea2112(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
