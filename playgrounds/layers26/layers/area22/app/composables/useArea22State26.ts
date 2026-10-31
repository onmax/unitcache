export function useArea22State26 (initial = 9) {
  const count = useState<number>('area22-state-26', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-26', () => [])
  const grouped = computed(() => groupArea2210(items.value))
  const label = computed(() => formatArea2210(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
