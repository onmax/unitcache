export function useArea20State4 (initial = 2) {
  const count = useState<number>('area20-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-4', () => [])
  const grouped = computed(() => groupArea207(items.value))
  const label = computed(() => formatArea207(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
