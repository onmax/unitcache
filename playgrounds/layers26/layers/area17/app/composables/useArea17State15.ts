export function useArea17State15 (initial = 3) {
  const count = useState<number>('area17-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area17-items-15', () => [])
  const grouped = computed(() => groupArea176(items.value))
  const label = computed(() => formatArea176(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
