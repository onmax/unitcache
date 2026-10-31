export function useArea14State25 (initial = 5) {
  const count = useState<number>('area14-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-25', () => [])
  const grouped = computed(() => groupArea1412(items.value))
  const label = computed(() => formatArea1412(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
