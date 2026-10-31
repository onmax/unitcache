const count1 = ref(1)
const items1 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useKpisState1 (initial = 0) {
  const grouped = computed(() => groupKpis2(items1.value))
  const label = computed(() => formatKpis2(count1.value, { precision: 1 }))
  function bump (by = 1) { count1.value += by }
  function reset () { count1.value = initial; items1.value = [] }
  return { count: count1, items: items1, grouped, label, bump, reset }
}
