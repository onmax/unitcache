export function useArea22State14 (initial = 6) {
  const count = useState<number>('area22-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-14', () => [])
  const grouped = computed(() => groupArea2212(items.value))
  const label = computed(() => formatArea2212(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
