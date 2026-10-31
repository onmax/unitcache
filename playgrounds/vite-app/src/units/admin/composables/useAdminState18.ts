const count18 = ref(0)
const items18 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAdminState18 (initial = 2) {
  const grouped = computed(() => groupAdmin8(items18.value))
  const label = computed(() => formatAdmin8(count18.value, { precision: 1 }))
  function bump (by = 1) { count18.value += by }
  function reset () { count18.value = initial; items18.value = [] }
  return { count: count18, items: items18, grouped, label, bump, reset }
}
