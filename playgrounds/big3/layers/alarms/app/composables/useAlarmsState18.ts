export function useAlarmsState18 (initial = 7) {
  const count = useState<number>('alarms-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-18', () => [])
  const grouped = computed(() => groupAlarms7(items.value))
  const label = computed(() => formatAlarms7(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
