export function useSettingsState29 (initial = 7) {
  const count = useState<number>('settings-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-29', () => [])
  const grouped = computed(() => groupSettings1(items.value))
  const label = computed(() => formatSettings1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
