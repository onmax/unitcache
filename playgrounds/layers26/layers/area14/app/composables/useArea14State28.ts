export function useArea14State28 (initial = 6) {
  const count = useState<number>('area14-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-28', () => [])
  const grouped = computed(() => groupArea148(items.value))
  const label = computed(() => formatArea148(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
