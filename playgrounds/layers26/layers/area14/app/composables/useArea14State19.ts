export function useArea14State19 (initial = 5) {
  const count = useState<number>('area14-state-19', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-19', () => [])
  const grouped = computed(() => groupArea145(items.value))
  const label = computed(() => formatArea145(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
