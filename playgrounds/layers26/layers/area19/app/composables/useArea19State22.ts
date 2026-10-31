export function useArea19State22 (initial = 2) {
  const count = useState<number>('area19-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area19-items-22', () => [])
  const grouped = computed(() => groupArea198(items.value))
  const label = computed(() => formatArea198(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
