export function useArea22State20 (initial = 8) {
  const count = useState<number>('area22-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-20', () => [])
  const grouped = computed(() => groupArea225(items.value))
  const label = computed(() => formatArea225(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
