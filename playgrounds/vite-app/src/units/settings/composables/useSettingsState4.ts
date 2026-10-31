const count4 = ref(4)
const items4 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useSettingsState4 (initial = 6) {
  const grouped = computed(() => groupSettings4(items4.value))
  const label = computed(() => formatSettings4(count4.value, { precision: 1 }))
  function bump (by = 1) { count4.value += by }
  function reset () { count4.value = initial; items4.value = [] }
  return { count: count4, items: items4, grouped, label, bump, reset }
}
