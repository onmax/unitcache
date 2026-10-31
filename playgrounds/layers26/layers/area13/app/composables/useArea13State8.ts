export function useArea13State8 (initial = 9) {
  const count = useState<number>('area13-state-8', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-8', () => [])
  const grouped = computed(() => groupArea130(items.value))
  const label = computed(() => formatArea130(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
