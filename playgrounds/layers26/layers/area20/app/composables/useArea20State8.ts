export function useArea20State8 (initial = 6) {
  const count = useState<number>('area20-state-8', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-8', () => [])
  const grouped = computed(() => groupArea203(items.value))
  const label = computed(() => formatArea203(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
