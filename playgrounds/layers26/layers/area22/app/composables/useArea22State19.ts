export function useArea22State19 (initial = 8) {
  const count = useState<number>('area22-state-19', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-19', () => [])
  const grouped = computed(() => groupArea220(items.value))
  const label = computed(() => formatArea220(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
