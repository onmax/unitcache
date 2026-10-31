export function useArea23State14 (initial = 5) {
  const count = useState<number>('area23-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-14', () => [])
  const grouped = computed(() => groupArea230(items.value))
  const label = computed(() => formatArea230(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
