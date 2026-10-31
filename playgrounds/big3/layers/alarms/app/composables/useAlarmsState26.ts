export function useAlarmsState26 (initial = 9) {
  const count = useState<number>('alarms-state-26', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-26', () => [])
  const grouped = computed(() => groupAlarms6(items.value))
  const label = computed(() => formatAlarms6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
