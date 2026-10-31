const count5 = ref(0)
const items5 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useSettingsState5 (initial = 4) {
  const grouped = computed(() => groupSettings1(items5.value))
  const label = computed(() => formatSettings1(count5.value, { precision: 1 }))
  function bump (by = 1) { count5.value += by }
  function reset () { count5.value = initial; items5.value = [] }
  return { count: count5, items: items5, grouped, label, bump, reset }
}
