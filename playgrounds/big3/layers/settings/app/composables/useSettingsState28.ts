export function useSettingsState28 (initial = 0) {
  const count = useState<number>('settings-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-28', () => [])
  const grouped = computed(() => groupSettings15(items.value))
  const label = computed(() => formatSettings15(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
