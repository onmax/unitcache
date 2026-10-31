export function useArea23State12 (initial = 6) {
  const count = useState<number>('area23-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-12', () => [])
  const grouped = computed(() => groupArea237(items.value))
  const label = computed(() => formatArea237(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
