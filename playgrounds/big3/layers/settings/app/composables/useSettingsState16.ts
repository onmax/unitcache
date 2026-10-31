export function useSettingsState16 (initial = 3) {
  const count = useState<number>('settings-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('settings-items-16', () => [])
  const grouped = computed(() => groupSettings11(items.value))
  const label = computed(() => formatSettings11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
