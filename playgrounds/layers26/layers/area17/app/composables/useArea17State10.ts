export function useArea17State10 (initial = 4) {
  const count = useState<number>('area17-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area17-items-10', () => [])
  const grouped = computed(() => groupArea174(items.value))
  const label = computed(() => formatArea174(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
