export function useCoreState24 (initial = 4) {
  const count = useState<number>('core-state-24', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-24', () => [])
  const grouped = computed(() => groupCore13(items.value))
  const label = computed(() => formatCore13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
