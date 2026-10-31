export function useArea20State10 (initial = 7) {
  const count = useState<number>('area20-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area20-items-10', () => [])
  const grouped = computed(() => groupArea209(items.value))
  const label = computed(() => formatArea209(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
