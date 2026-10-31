const count15 = ref(6)
const items15 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useSettingsState15 (initial = 8) {
  const grouped = computed(() => groupSettings4(items15.value))
  const label = computed(() => formatSettings4(count15.value, { precision: 1 }))
  function bump (by = 1) { count15.value += by }
  function reset () { count15.value = initial; items15.value = [] }
  return { count: count15, items: items15, grouped, label, bump, reset }
}
