export function useSettingsState6 (initial = 3) {
  const count = useState<number>('settings-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-6', () => [])
  const grouped = computed(() => groupSettings8(items.value))
  const label = computed(() => formatSettings8(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
