export function useArea19State12 (initial = 3) {
  const count = useState<number>('area19-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area19-items-12', () => [])
  const grouped = computed(() => groupArea1915(items.value))
  const label = computed(() => formatArea1915(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
