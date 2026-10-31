export function useArea15State4 (initial = 2) {
  const count = useState<number>('area15-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area15-items-4', () => [])
  const grouped = computed(() => groupArea154(items.value))
  const label = computed(() => formatArea154(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
