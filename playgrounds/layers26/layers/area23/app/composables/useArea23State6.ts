export function useArea23State6 (initial = 5) {
  const count = useState<number>('area23-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-6', () => [])
  const grouped = computed(() => groupArea237(items.value))
  const label = computed(() => formatArea237(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
