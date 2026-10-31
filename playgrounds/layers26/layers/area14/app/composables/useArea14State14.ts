export function useArea14State14 (initial = 6) {
  const count = useState<number>('area14-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-14', () => [])
  const grouped = computed(() => groupArea1410(items.value))
  const label = computed(() => formatArea1410(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
