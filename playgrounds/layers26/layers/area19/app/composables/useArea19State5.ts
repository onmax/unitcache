export function useArea19State5 (initial = 6) {
  const count = useState<number>('area19-state-5', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area19-items-5', () => [])
  const grouped = computed(() => groupArea190(items.value))
  const label = computed(() => formatArea190(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
