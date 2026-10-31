const count1 = ref(4)
const items1 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useSettingsState1 (initial = 3) {
  const grouped = computed(() => groupSettings8(items1.value))
  const label = computed(() => formatSettings8(count1.value, { precision: 1 }))
  function bump (by = 1) { count1.value += by }
  function reset () { count1.value = initial; items1.value = [] }
  return { count: count1, items: items1, grouped, label, bump, reset }
}
