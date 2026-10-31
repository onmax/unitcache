export function useArea15State25 (initial = 4) {
  const count = useState<number>('area15-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area15-items-25', () => [])
  const grouped = computed(() => groupArea151(items.value))
  const label = computed(() => formatArea151(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
