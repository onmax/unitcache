export function useArea20State25 (initial = 9) {
  const count = useState<number>('area20-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-25', () => [])
  const grouped = computed(() => groupArea206(items.value))
  const label = computed(() => formatArea206(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
