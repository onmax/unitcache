const count3 = ref(6)
const items3 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useSettingsState3 (initial = 3) {
  const grouped = computed(() => groupSettings3(items3.value))
  const label = computed(() => formatSettings3(count3.value, { precision: 1 }))
  function bump (by = 1) { count3.value += by }
  function reset () { count3.value = initial; items3.value = [] }
  return { count: count3, items: items3, grouped, label, bump, reset }
}
