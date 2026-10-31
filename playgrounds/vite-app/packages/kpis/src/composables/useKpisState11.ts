const count11 = ref(3)
const items11 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useKpisState11 (initial = 2) {
  const grouped = computed(() => groupKpis1(items11.value))
  const label = computed(() => formatKpis1(count11.value, { precision: 1 }))
  function bump (by = 1) { count11.value += by }
  function reset () { count11.value = initial; items11.value = [] }
  return { count: count11, items: items11, grouped, label, bump, reset }
}
