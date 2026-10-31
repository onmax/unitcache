export function useSettingsState20 (initial = 7) {
  const count = useState<number>('settings-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-20', () => [])
  const grouped = computed(() => groupSettings5(items.value))
  const label = computed(() => formatSettings5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
