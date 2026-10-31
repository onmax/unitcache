export function useAlarmsState3 (initial = 1) {
  const count = useState<number>('alarms-state-3', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-3', () => [])
  const grouped = computed(() => groupAlarms2(items.value))
  const label = computed(() => formatAlarms2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
