export function useSettingsState17 (initial = 9) {
  const count = useState<number>('settings-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-17', () => [])
  const grouped = computed(() => groupSettings11(items.value))
  const label = computed(() => formatSettings11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
