export function useArea19State8 (initial = 1) {
  const count = useState<number>('area19-state-8', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area19-items-8', () => [])
  const grouped = computed(() => groupArea1911(items.value))
  const label = computed(() => formatArea1911(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
