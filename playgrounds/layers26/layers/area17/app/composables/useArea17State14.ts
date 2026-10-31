export function useArea17State14 (initial = 2) {
  const count = useState<number>('area17-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area17-items-14', () => [])
  const grouped = computed(() => groupArea1711(items.value))
  const label = computed(() => formatArea1711(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
