export function useSettingsState14 (initial = 0) {
  const count = useState<number>('settings-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-14', () => [])
  const grouped = computed(() => groupSettings8(items.value))
  const label = computed(() => formatSettings8(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
