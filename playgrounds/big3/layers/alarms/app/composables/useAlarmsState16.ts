export function useAlarmsState16 (initial = 3) {
  const count = useState<number>('alarms-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-16', () => [])
  const grouped = computed(() => groupAlarms9(items.value))
  const label = computed(() => formatAlarms9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
