export function useArea19State16 (initial = 1) {
  const count = useState<number>('area19-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area19-items-16', () => [])
  const grouped = computed(() => groupArea1913(items.value))
  const label = computed(() => formatArea1913(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
