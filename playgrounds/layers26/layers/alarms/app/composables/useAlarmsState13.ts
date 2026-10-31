export function useAlarmsState13 (initial = 1) {
  const count = useState<number>('alarms-state-13', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-13', () => [])
  const grouped = computed(() => groupAlarms14(items.value))
  const label = computed(() => formatAlarms14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
