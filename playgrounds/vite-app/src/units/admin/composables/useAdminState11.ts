const count11 = ref(7)
const items11 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAdminState11 (initial = 1) {
  const grouped = computed(() => groupAdmin0(items11.value))
  const label = computed(() => formatAdmin0(count11.value, { precision: 1 }))
  function bump (by = 1) { count11.value += by }
  function reset () { count11.value = initial; items11.value = [] }
  return { count: count11, items: items11, grouped, label, bump, reset }
}
