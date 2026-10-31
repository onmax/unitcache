const count8 = ref(3)
const items8 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAdminState8 (initial = 2) {
  const grouped = computed(() => groupAdmin0(items8.value))
  const label = computed(() => formatAdmin0(count8.value, { precision: 1 }))
  function bump (by = 1) { count8.value += by }
  function reset () { count8.value = initial; items8.value = [] }
  return { count: count8, items: items8, grouped, label, bump, reset }
}
