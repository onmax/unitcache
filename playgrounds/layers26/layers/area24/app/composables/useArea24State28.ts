export function useArea24State28 (initial = 3) {
  const count = useState<number>('area24-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-28', () => [])
  const grouped = computed(() => groupArea244(items.value))
  const label = computed(() => formatArea244(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
