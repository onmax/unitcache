export function useArea21State9 (initial = 3) {
  const count = useState<number>('area21-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area21-items-9', () => [])
  const grouped = computed(() => groupArea2115(items.value))
  const label = computed(() => formatArea2115(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
