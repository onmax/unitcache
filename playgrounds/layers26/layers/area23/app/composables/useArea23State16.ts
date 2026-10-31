export function useArea23State16 (initial = 7) {
  const count = useState<number>('area23-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area23-items-16', () => [])
  const grouped = computed(() => groupArea236(items.value))
  const label = computed(() => formatArea236(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
