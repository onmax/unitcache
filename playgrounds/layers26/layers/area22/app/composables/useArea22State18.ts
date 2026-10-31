export function useArea22State18 (initial = 9) {
  const count = useState<number>('area22-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-18', () => [])
  const grouped = computed(() => groupArea227(items.value))
  const label = computed(() => formatArea227(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
