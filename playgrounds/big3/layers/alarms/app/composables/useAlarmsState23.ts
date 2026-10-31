export function useAlarmsState23 (initial = 4) {
  const count = useState<number>('alarms-state-23', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-23', () => [])
  const grouped = computed(() => groupAlarms7(items.value))
  const label = computed(() => formatAlarms7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
