export function useArea18State20 (initial = 2) {
  const count = useState<number>('area18-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-20', () => [])
  const grouped = computed(() => groupArea186(items.value))
  const label = computed(() => formatArea186(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
