export function useArea22State11 (initial = 0) {
  const count = useState<number>('area22-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-11', () => [])
  const grouped = computed(() => groupArea2211(items.value))
  const label = computed(() => formatArea2211(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
