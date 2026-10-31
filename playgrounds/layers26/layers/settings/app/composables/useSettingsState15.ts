export function useSettingsState15 (initial = 8) {
  const count = useState<number>('settings-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-15', () => [])
  const grouped = computed(() => groupSettings6(items.value))
  const label = computed(() => formatSettings6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
