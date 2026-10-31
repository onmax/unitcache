export function useArea22State29 (initial = 3) {
  const count = useState<number>('area22-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-29', () => [])
  const grouped = computed(() => groupArea2213(items.value))
  const label = computed(() => formatArea2213(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
