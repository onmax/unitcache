export function useArea21State1 (initial = 3) {
  const count = useState<number>('area21-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area21-items-1', () => [])
  const grouped = computed(() => groupArea214(items.value))
  const label = computed(() => formatArea214(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
