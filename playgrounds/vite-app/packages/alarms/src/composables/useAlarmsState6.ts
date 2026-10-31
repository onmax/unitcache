const count6 = ref(2)
const items6 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAlarmsState6 (initial = 9) {
  const grouped = computed(() => groupAlarms0(items6.value))
  const label = computed(() => formatAlarms0(count6.value, { precision: 1 }))
  function bump (by = 1) { count6.value += by }
  function reset () { count6.value = initial; items6.value = [] }
  return { count: count6, items: items6, grouped, label, bump, reset }
}
