export function useSettingsState27 (initial = 1) {
  const count = useState<number>('settings-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-27', () => [])
  const grouped = computed(() => groupSettings13(items.value))
  const label = computed(() => formatSettings13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
