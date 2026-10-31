export function useAlarmsState21 (initial = 0) {
  const count = useState<number>('alarms-state-21', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-21', () => [])
  const grouped = computed(() => groupAlarms4(items.value))
  const label = computed(() => formatAlarms4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
