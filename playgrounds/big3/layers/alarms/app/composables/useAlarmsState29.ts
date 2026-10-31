export function useAlarmsState29 (initial = 4) {
  const count = useState<number>('alarms-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-29', () => [])
  const grouped = computed(() => groupAlarms5(items.value))
  const label = computed(() => formatAlarms5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
