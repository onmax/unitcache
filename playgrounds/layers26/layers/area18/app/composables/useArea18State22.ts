export function useArea18State22 (initial = 4) {
  const count = useState<number>('area18-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-22', () => [])
  const grouped = computed(() => groupArea182(items.value))
  const label = computed(() => formatArea182(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
