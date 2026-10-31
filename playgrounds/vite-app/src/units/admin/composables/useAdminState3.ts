const count3 = ref(7)
const items3 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAdminState3 (initial = 5) {
  const grouped = computed(() => groupAdmin10(items3.value))
  const label = computed(() => formatAdmin10(count3.value, { precision: 1 }))
  function bump (by = 1) { count3.value += by }
  function reset () { count3.value = initial; items3.value = [] }
  return { count: count3, items: items3, grouped, label, bump, reset }
}
