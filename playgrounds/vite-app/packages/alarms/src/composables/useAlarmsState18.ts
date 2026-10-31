const count18 = ref(1)
const items18 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAlarmsState18 (initial = 0) {
  const grouped = computed(() => groupAlarms4(items18.value))
  const label = computed(() => formatAlarms4(count18.value, { precision: 1 }))
  function bump (by = 1) { count18.value += by }
  function reset () { count18.value = initial; items18.value = [] }
  return { count: count18, items: items18, grouped, label, bump, reset }
}
