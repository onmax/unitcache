export function useSettingsState18 (initial = 3) {
  const count = useState<number>('settings-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-18', () => [])
  const grouped = computed(() => groupSettings10(items.value))
  const label = computed(() => formatSettings10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
