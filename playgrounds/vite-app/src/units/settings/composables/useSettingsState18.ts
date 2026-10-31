const count18 = ref(4)
const items18 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useSettingsState18 (initial = 3) {
  const grouped = computed(() => groupSettings9(items18.value))
  const label = computed(() => formatSettings9(count18.value, { precision: 1 }))
  function bump (by = 1) { count18.value += by }
  function reset () { count18.value = initial; items18.value = [] }
  return { count: count18, items: items18, grouped, label, bump, reset }
}
