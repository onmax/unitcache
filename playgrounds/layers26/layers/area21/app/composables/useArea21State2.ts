export function useArea21State2 (initial = 2) {
  const count = useState<number>('area21-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area21-items-2', () => [])
  const grouped = computed(() => groupArea215(items.value))
  const label = computed(() => formatArea215(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
