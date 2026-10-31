export function useAlarmsState20 (initial = 0) {
  const count = useState<number>('alarms-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-20', () => [])
  const grouped = computed(() => groupAlarms1(items.value))
  const label = computed(() => formatAlarms1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
