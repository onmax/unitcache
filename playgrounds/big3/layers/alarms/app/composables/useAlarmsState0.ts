export function useAlarmsState0 (initial = 9) {
  const count = useState<number>('alarms-state-0', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('alarms-items-0', () => [])
  const grouped = computed(() => groupAlarms1(items.value))
  const label = computed(() => formatAlarms1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
