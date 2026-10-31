const count9 = ref(9)
const items9 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useKpisState9 (initial = 5) {
  const grouped = computed(() => groupKpis10(items9.value))
  const label = computed(() => formatKpis10(count9.value, { precision: 1 }))
  function bump (by = 1) { count9.value += by }
  function reset () { count9.value = initial; items9.value = [] }
  return { count: count9, items: items9, grouped, label, bump, reset }
}
