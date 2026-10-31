export function useArea18State10 (initial = 1) {
  const count = useState<number>('area18-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-10', () => [])
  const grouped = computed(() => groupArea1810(items.value))
  const label = computed(() => formatArea1810(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
