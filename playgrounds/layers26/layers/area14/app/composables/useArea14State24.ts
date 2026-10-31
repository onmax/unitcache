export function useArea14State24 (initial = 7) {
  const count = useState<number>('area14-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-24', () => [])
  const grouped = computed(() => groupArea148(items.value))
  const label = computed(() => formatArea148(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
