export function useArea22State10 (initial = 8) {
  const count = useState<number>('area22-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-10', () => [])
  const grouped = computed(() => groupArea2212(items.value))
  const label = computed(() => formatArea2212(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
