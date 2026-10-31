export function useArea22State22 (initial = 2) {
  const count = useState<number>('area22-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-22', () => [])
  const grouped = computed(() => groupArea228(items.value))
  const label = computed(() => formatArea228(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
