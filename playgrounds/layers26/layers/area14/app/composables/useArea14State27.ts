export function useArea14State27 (initial = 1) {
  const count = useState<number>('area14-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-27', () => [])
  const grouped = computed(() => groupArea146(items.value))
  const label = computed(() => formatArea146(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
