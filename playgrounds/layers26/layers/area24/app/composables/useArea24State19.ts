export function useArea24State19 (initial = 4) {
  const count = useState<number>('area24-state-19', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-19', () => [])
  const grouped = computed(() => groupArea243(items.value))
  const label = computed(() => formatArea243(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
