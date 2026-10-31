export function useAlarmsState2 (initial = 8) {
  const count = useState<number>('alarms-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-2', () => [])
  const grouped = computed(() => groupAlarms12(items.value))
  const label = computed(() => formatAlarms12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
