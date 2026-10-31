export function useArea18State3 (initial = 4) {
  const count = useState<number>('area18-state-3', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-3', () => [])
  const grouped = computed(() => groupArea183(items.value))
  const label = computed(() => formatArea183(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
