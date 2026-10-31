const count6 = ref(0)
const items6 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAdminState6 (initial = 0) {
  const grouped = computed(() => groupAdmin8(items6.value))
  const label = computed(() => formatAdmin8(count6.value, { precision: 1 }))
  function bump (by = 1) { count6.value += by }
  function reset () { count6.value = initial; items6.value = [] }
  return { count: count6, items: items6, grouped, label, bump, reset }
}
