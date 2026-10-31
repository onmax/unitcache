const count12 = ref(4)
const items12 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAdminState12 (initial = 8) {
  const grouped = computed(() => groupAdmin0(items12.value))
  const label = computed(() => formatAdmin0(count12.value, { precision: 1 }))
  function bump (by = 1) { count12.value += by }
  function reset () { count12.value = initial; items12.value = [] }
  return { count: count12, items: items12, grouped, label, bump, reset }
}
