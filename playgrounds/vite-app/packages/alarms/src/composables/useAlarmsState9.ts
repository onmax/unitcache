const count9 = ref(1)
const items9 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAlarmsState9 (initial = 9) {
  const grouped = computed(() => groupAlarms11(items9.value))
  const label = computed(() => formatAlarms11(count9.value, { precision: 1 }))
  function bump (by = 1) { count9.value += by }
  function reset () { count9.value = initial; items9.value = [] }
  return { count: count9, items: items9, grouped, label, bump, reset }
}
