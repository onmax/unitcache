export function useArea18State28 (initial = 7) {
  const count = useState<number>('area18-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-28', () => [])
  const grouped = computed(() => groupArea182(items.value))
  const label = computed(() => formatArea182(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
