export function useAlarmsState6 (initial = 8) {
  const count = useState<number>('alarms-state-6', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-6', () => [])
  const grouped = computed(() => groupAlarms9(items.value))
  const label = computed(() => formatAlarms9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
