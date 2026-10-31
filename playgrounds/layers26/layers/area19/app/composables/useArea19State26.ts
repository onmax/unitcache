export function useArea19State26 (initial = 1) {
  const count = useState<number>('area19-state-26', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area19-items-26', () => [])
  const grouped = computed(() => groupArea193(items.value))
  const label = computed(() => formatArea193(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
