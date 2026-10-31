export function useArea13State21 (initial = 7) {
  const count = useState<number>('area13-state-21', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-21', () => [])
  const grouped = computed(() => groupArea135(items.value))
  const label = computed(() => formatArea135(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
