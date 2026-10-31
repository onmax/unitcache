export function useArea14State6 (initial = 4) {
  const count = useState<number>('area14-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-6', () => [])
  const grouped = computed(() => groupArea146(items.value))
  const label = computed(() => formatArea146(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
