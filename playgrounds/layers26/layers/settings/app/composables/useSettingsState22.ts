export function useSettingsState22 (initial = 9) {
  const count = useState<number>('settings-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-22', () => [])
  const grouped = computed(() => groupSettings5(items.value))
  const label = computed(() => formatSettings5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
