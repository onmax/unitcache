export function useAlarmsState7 (initial = 1) {
  const count = useState<number>('alarms-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-7', () => [])
  const grouped = computed(() => groupAlarms10(items.value))
  const label = computed(() => formatAlarms10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
