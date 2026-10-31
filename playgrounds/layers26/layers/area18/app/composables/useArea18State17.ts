export function useArea18State17 (initial = 1) {
  const count = useState<number>('area18-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-17', () => [])
  const grouped = computed(() => groupArea187(items.value))
  const label = computed(() => formatArea187(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
