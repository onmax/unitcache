export function useArea15State9 (initial = 0) {
  const count = useState<number>('area15-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area15-items-9', () => [])
  const grouped = computed(() => groupArea1512(items.value))
  const label = computed(() => formatArea1512(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
