const count17 = ref(5)
const items17 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAlarmsState17 (initial = 3) {
  const grouped = computed(() => groupAlarms5(items17.value))
  const label = computed(() => formatAlarms5(count17.value, { precision: 1 }))
  function bump (by = 1) { count17.value += by }
  function reset () { count17.value = initial; items17.value = [] }
  return { count: count17, items: items17, grouped, label, bump, reset }
}
