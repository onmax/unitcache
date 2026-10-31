export function useAlarmsState1 (initial = 1) {
  const count = useState<number>('alarms-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-1', () => [])
  const grouped = computed(() => groupAlarms0(items.value))
  const label = computed(() => formatAlarms0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
