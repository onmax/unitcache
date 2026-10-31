export function useSettingsState10 (initial = 9) {
  const count = useState<number>('settings-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-10', () => [])
  const grouped = computed(() => groupSettings2(items.value))
  const label = computed(() => formatSettings2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
