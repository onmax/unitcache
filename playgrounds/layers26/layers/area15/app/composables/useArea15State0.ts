export function useArea15State0 (initial = 9) {
  const count = useState<number>('area15-state-0', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area15-items-0', () => [])
  const grouped = computed(() => groupArea152(items.value))
  const label = computed(() => formatArea152(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
