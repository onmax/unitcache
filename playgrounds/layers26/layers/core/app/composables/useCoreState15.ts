export function useCoreState15 (initial = 0) {
  const count = useState<number>('core-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-15', () => [])
  const grouped = computed(() => groupCore0(items.value))
  const label = computed(() => formatCore0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
