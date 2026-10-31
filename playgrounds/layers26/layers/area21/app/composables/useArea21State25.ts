export function useArea21State25 (initial = 1) {
  const count = useState<number>('area21-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area21-items-25', () => [])
  const grouped = computed(() => groupArea214(items.value))
  const label = computed(() => formatArea214(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
