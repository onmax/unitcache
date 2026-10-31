const count4 = ref(2)
const items4 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAdminState4 (initial = 5) {
  const grouped = computed(() => groupAdmin2(items4.value))
  const label = computed(() => formatAdmin2(count4.value, { precision: 1 }))
  function bump (by = 1) { count4.value += by }
  function reset () { count4.value = initial; items4.value = [] }
  return { count: count4, items: items4, grouped, label, bump, reset }
}
