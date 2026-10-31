const count8 = ref(8)
const items8 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useKpisState8 (initial = 8) {
  const grouped = computed(() => groupKpis1(items8.value))
  const label = computed(() => formatKpis1(count8.value, { precision: 1 }))
  function bump (by = 1) { count8.value += by }
  function reset () { count8.value = initial; items8.value = [] }
  return { count: count8, items: items8, grouped, label, bump, reset }
}
