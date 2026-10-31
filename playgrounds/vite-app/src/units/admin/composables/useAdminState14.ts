const count14 = ref(0)
const items14 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAdminState14 (initial = 8) {
  const grouped = computed(() => groupAdmin4(items14.value))
  const label = computed(() => formatAdmin4(count14.value, { precision: 1 }))
  function bump (by = 1) { count14.value += by }
  function reset () { count14.value = initial; items14.value = [] }
  return { count: count14, items: items14, grouped, label, bump, reset }
}
