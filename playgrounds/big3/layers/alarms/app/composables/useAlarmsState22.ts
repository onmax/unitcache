export function useAlarmsState22 (initial = 9) {
  const count = useState<number>('alarms-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-22', () => [])
  const grouped = computed(() => groupAlarms13(items.value))
  const label = computed(() => formatAlarms13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
