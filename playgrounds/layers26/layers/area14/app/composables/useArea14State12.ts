export function useArea14State12 (initial = 2) {
  const count = useState<number>('area14-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area14-items-12', () => [])
  const grouped = computed(() => groupArea1410(items.value))
  const label = computed(() => formatArea1410(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
