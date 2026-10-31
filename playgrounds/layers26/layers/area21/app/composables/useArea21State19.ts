export function useArea21State19 (initial = 7) {
  const count = useState<number>('area21-state-19', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area21-items-19', () => [])
  const grouped = computed(() => groupArea213(items.value))
  const label = computed(() => formatArea213(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
