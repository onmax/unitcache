export function useArea22State17 (initial = 7) {
  const count = useState<number>('area22-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-17', () => [])
  const grouped = computed(() => groupArea227(items.value))
  const label = computed(() => formatArea227(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
