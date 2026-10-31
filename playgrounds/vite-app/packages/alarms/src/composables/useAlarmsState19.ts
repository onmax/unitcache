const count19 = ref(9)
const items19 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAlarmsState19 (initial = 1) {
  const grouped = computed(() => groupAlarms2(items19.value))
  const label = computed(() => formatAlarms2(count19.value, { precision: 1 }))
  function bump (by = 1) { count19.value += by }
  function reset () { count19.value = initial; items19.value = [] }
  return { count: count19, items: items19, grouped, label, bump, reset }
}
