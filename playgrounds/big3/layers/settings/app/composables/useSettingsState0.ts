export function useSettingsState0 (initial = 9) {
  const count = useState<number>('settings-state-0', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-0', () => [])
  const grouped = computed(() => groupSettings3(items.value))
  const label = computed(() => formatSettings3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
