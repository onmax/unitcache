export function useAlarmsState15 (initial = 6) {
  const count = useState<number>('alarms-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-15', () => [])
  const grouped = computed(() => groupAlarms7(items.value))
  const label = computed(() => formatAlarms7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
