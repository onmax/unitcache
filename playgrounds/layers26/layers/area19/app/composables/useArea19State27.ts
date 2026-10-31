export function useArea19State27 (initial = 8) {
  const count = useState<number>('area19-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area19-items-27', () => [])
  const grouped = computed(() => groupArea196(items.value))
  const label = computed(() => formatArea196(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
