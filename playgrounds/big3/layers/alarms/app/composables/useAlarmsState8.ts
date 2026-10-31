export function useAlarmsState8 (initial = 1) {
  const count = useState<number>('alarms-state-8', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-8', () => [])
  const grouped = computed(() => groupAlarms6(items.value))
  const label = computed(() => formatAlarms6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
