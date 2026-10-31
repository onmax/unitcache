export function useAlarmsState14 (initial = 9) {
  const count = useState<number>('alarms-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-14', () => [])
  const grouped = computed(() => groupAlarms10(items.value))
  const label = computed(() => formatAlarms10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
