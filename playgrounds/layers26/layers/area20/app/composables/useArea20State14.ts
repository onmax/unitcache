export function useArea20State14 (initial = 4) {
  const count = useState<number>('area20-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-14', () => [])
  const grouped = computed(() => groupArea204(items.value))
  const label = computed(() => formatArea204(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
