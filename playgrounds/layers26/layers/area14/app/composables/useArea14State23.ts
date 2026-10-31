export function useArea14State23 (initial = 4) {
  const count = useState<number>('area14-state-23', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-23', () => [])
  const grouped = computed(() => groupArea142(items.value))
  const label = computed(() => formatArea142(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
