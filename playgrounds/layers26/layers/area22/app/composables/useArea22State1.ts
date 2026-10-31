export function useArea22State1 (initial = 6) {
  const count = useState<number>('area22-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-1', () => [])
  const grouped = computed(() => groupArea224(items.value))
  const label = computed(() => formatArea224(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
