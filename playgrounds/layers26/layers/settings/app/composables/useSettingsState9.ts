export function useSettingsState9 (initial = 1) {
  const count = useState<number>('settings-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-9', () => [])
  const grouped = computed(() => groupSettings14(items.value))
  const label = computed(() => formatSettings14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
