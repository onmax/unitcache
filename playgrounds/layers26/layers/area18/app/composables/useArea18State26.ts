export function useArea18State26 (initial = 5) {
  const count = useState<number>('area18-state-26', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-26', () => [])
  const grouped = computed(() => groupArea1814(items.value))
  const label = computed(() => formatArea1814(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
