export function useArea18State4 (initial = 5) {
  const count = useState<number>('area18-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-4', () => [])
  const grouped = computed(() => groupArea185(items.value))
  const label = computed(() => formatArea185(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
