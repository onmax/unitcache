export function useArea22State15 (initial = 2) {
  const count = useState<number>('area22-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-15', () => [])
  const grouped = computed(() => groupArea228(items.value))
  const label = computed(() => formatArea228(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
