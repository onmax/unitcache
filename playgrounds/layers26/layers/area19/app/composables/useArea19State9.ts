export function useArea19State9 (initial = 7) {
  const count = useState<number>('area19-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area19-items-9', () => [])
  const grouped = computed(() => groupArea194(items.value))
  const label = computed(() => formatArea194(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
