export function useArea18State21 (initial = 0) {
  const count = useState<number>('area18-state-21', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-21', () => [])
  const grouped = computed(() => groupArea183(items.value))
  const label = computed(() => formatArea183(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
