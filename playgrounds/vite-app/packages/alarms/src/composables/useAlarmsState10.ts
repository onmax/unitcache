const count10 = ref(5)
const items10 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAlarmsState10 (initial = 6) {
  const grouped = computed(() => groupAlarms6(items10.value))
  const label = computed(() => formatAlarms6(count10.value, { precision: 1 }))
  function bump (by = 1) { count10.value += by }
  function reset () { count10.value = initial; items10.value = [] }
  return { count: count10, items: items10, grouped, label, bump, reset }
}
