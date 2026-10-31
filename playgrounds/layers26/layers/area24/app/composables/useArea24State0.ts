export function useArea24State0 (initial = 9) {
  const count = useState<number>('area24-state-0', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area24-items-0', () => [])
  const grouped = computed(() => groupArea247(items.value))
  const label = computed(() => formatArea247(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
