export function useArea22State13 (initial = 3) {
  const count = useState<number>('area22-state-13', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('area22-items-13', () => [])
  const grouped = computed(() => groupArea229(items.value))
  const label = computed(() => formatArea229(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
