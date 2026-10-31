export function useArea13State27 (initial = 9) {
  const count = useState<number>('area13-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-27', () => [])
  const grouped = computed(() => groupArea133(items.value))
  const label = computed(() => formatArea133(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
