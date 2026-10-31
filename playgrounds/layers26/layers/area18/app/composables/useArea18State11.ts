export function useArea18State11 (initial = 6) {
  const count = useState<number>('area18-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-11', () => [])
  const grouped = computed(() => groupArea189(items.value))
  const label = computed(() => formatArea189(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
