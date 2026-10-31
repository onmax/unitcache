const count0 = ref(7)
const items0 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAdminState0 (initial = 9) {
  const grouped = computed(() => groupAdmin2(items0.value))
  const label = computed(() => formatAdmin2(count0.value, { precision: 1 }))
  function bump (by = 1) { count0.value += by }
  function reset () { count0.value = initial; items0.value = [] }
  return { count: count0, items: items0, grouped, label, bump, reset }
}
