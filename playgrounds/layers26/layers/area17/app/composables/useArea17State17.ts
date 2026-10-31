export function useArea17State17 (initial = 4) {
  const count = useState<number>('area17-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area17-items-17', () => [])
  const grouped = computed(() => groupArea1714(items.value))
  const label = computed(() => formatArea1714(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
