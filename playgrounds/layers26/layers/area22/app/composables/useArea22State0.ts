export function useArea22State0 (initial = 0) {
  const count = useState<number>('area22-state-0', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-0', () => [])
  const grouped = computed(() => groupArea2214(items.value))
  const label = computed(() => formatArea2214(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
