export function useArea18State9 (initial = 2) {
  const count = useState<number>('area18-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-9', () => [])
  const grouped = computed(() => groupArea185(items.value))
  const label = computed(() => formatArea185(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
