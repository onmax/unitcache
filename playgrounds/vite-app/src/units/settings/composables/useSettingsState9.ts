const count9 = ref(4)
const items9 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useSettingsState9 (initial = 3) {
  const grouped = computed(() => groupSettings11(items9.value))
  const label = computed(() => formatSettings11(count9.value, { precision: 1 }))
  function bump (by = 1) { count9.value += by }
  function reset () { count9.value = initial; items9.value = [] }
  return { count: count9, items: items9, grouped, label, bump, reset }
}
