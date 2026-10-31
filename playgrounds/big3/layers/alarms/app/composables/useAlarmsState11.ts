export function useAlarmsState11 (initial = 4) {
  const count = useState<number>('alarms-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-11', () => [])
  const grouped = computed(() => groupAlarms11(items.value))
  const label = computed(() => formatAlarms11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
