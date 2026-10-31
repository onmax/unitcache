export function useArea18State5 (initial = 2) {
  const count = useState<number>('area18-state-5', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-5', () => [])
  const grouped = computed(() => groupArea183(items.value))
  const label = computed(() => formatArea183(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
