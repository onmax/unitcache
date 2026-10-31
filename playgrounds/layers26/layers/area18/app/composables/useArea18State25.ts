export function useArea18State25 (initial = 9) {
  const count = useState<number>('area18-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area18-items-25', () => [])
  const grouped = computed(() => groupArea186(items.value))
  const label = computed(() => formatArea186(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
