export function useSettingsState1 (initial = 3) {
  const count = useState<number>('settings-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-1', () => [])
  const grouped = computed(() => groupSettings9(items.value))
  const label = computed(() => formatSettings9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
