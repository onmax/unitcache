export function useAlarmsState4 (initial = 8) {
  const count = useState<number>('alarms-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-4', () => [])
  const grouped = computed(() => groupAlarms9(items.value))
  const label = computed(() => formatAlarms9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
