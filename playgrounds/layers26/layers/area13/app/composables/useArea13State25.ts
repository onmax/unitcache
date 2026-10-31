export function useArea13State25 (initial = 6) {
  const count = useState<number>('area13-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area13-items-25', () => [])
  const grouped = computed(() => groupArea1312(items.value))
  const label = computed(() => formatArea1312(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
