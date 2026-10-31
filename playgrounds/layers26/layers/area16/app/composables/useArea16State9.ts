export function useArea16State9 (initial = 7) {
  const count = useState<number>('area16-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area16-items-9', () => [])
  const grouped = computed(() => groupArea161(items.value))
  const label = computed(() => formatArea161(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
