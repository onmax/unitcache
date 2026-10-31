export function useArea19State7 (initial = 8) {
  const count = useState<number>('area19-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area19-items-7', () => [])
  const grouped = computed(() => groupArea1912(items.value))
  const label = computed(() => formatArea1912(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
