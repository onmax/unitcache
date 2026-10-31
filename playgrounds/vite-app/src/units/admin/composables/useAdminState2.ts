const count2 = ref(2)
const items2 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAdminState2 (initial = 4) {
  const grouped = computed(() => groupAdmin10(items2.value))
  const label = computed(() => formatAdmin10(count2.value, { precision: 1 }))
  function bump (by = 1) { count2.value += by }
  function reset () { count2.value = initial; items2.value = [] }
  return { count: count2, items: items2, grouped, label, bump, reset }
}
