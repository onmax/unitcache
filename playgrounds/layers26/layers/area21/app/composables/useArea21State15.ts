export function useArea21State15 (initial = 0) {
  const count = useState<number>('area21-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area21-items-15', () => [])
  const grouped = computed(() => groupArea218(items.value))
  const label = computed(() => formatArea218(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
