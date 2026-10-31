const count6 = ref(0)
const items6 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useSettingsState6 (initial = 9) {
  const grouped = computed(() => groupSettings1(items6.value))
  const label = computed(() => formatSettings1(count6.value, { precision: 1 }))
  function bump (by = 1) { count6.value += by }
  function reset () { count6.value = initial; items6.value = [] }
  return { count: count6, items: items6, grouped, label, bump, reset }
}
