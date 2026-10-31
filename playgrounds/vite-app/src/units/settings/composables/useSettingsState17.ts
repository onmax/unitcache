const count17 = ref(7)
const items17 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useSettingsState17 (initial = 9) {
  const grouped = computed(() => groupSettings3(items17.value))
  const label = computed(() => formatSettings3(count17.value, { precision: 1 }))
  function bump (by = 1) { count17.value += by }
  function reset () { count17.value = initial; items17.value = [] }
  return { count: count17, items: items17, grouped, label, bump, reset }
}
