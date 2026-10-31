const count13 = ref(8)
const items13 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAdminState13 (initial = 9) {
  const grouped = computed(() => groupAdmin3(items13.value))
  const label = computed(() => formatAdmin3(count13.value, { precision: 1 }))
  function bump (by = 1) { count13.value += by }
  function reset () { count13.value = initial; items13.value = [] }
  return { count: count13, items: items13, grouped, label, bump, reset }
}
