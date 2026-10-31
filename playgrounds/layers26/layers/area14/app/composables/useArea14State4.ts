export function useArea14State4 (initial = 3) {
  const count = useState<number>('area14-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-4', () => [])
  const grouped = computed(() => groupArea141(items.value))
  const label = computed(() => formatArea141(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
