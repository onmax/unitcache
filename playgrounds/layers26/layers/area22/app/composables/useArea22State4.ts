export function useArea22State4 (initial = 0) {
  const count = useState<number>('area22-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-4', () => [])
  const grouped = computed(() => groupArea2212(items.value))
  const label = computed(() => formatArea2212(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
