export function useCoreState27 (initial = 2) {
  const count = useState<number>('core-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('core-items-27', () => [])
  const grouped = computed(() => groupCore0(items.value))
  const label = computed(() => formatCore0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
