export function useArea18State27 (initial = 2) {
  const count = useState<number>('area18-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-27', () => [])
  const grouped = computed(() => groupArea1812(items.value))
  const label = computed(() => formatArea1812(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
