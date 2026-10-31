export function useArea24State9 (initial = 4) {
  const count = useState<number>('area24-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-9', () => [])
  const grouped = computed(() => groupArea249(items.value))
  const label = computed(() => formatArea249(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
