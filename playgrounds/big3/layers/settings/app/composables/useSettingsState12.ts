export function useSettingsState12 (initial = 2) {
  const count = useState<number>('settings-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-12', () => [])
  const grouped = computed(() => groupSettings7(items.value))
  const label = computed(() => formatSettings7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
