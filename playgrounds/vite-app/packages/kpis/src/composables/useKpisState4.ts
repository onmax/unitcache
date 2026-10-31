const count4 = ref(8)
const items4 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useKpisState4 (initial = 1) {
  const grouped = computed(() => groupKpis11(items4.value))
  const label = computed(() => formatKpis11(count4.value, { precision: 1 }))
  function bump (by = 1) { count4.value += by }
  function reset () { count4.value = initial; items4.value = [] }
  return { count: count4, items: items4, grouped, label, bump, reset }
}
