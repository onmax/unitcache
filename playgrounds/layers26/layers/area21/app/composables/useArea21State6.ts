export function useArea21State6 (initial = 4) {
  const count = useState<number>('area21-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area21-items-6', () => [])
  const grouped = computed(() => groupArea210(items.value))
  const label = computed(() => formatArea210(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
