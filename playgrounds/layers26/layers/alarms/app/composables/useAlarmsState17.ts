export function useAlarmsState17 (initial = 3) {
  const count = useState<number>('alarms-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-17', () => [])
  const grouped = computed(() => groupAlarms12(items.value))
  const label = computed(() => formatAlarms12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
