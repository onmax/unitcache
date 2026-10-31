const count0 = ref(4)
const items0 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useKpisState0 (initial = 7) {
  const grouped = computed(() => groupKpis0(items0.value))
  const label = computed(() => formatKpis0(count0.value, { precision: 1 }))
  function bump (by = 1) { count0.value += by }
  function reset () { count0.value = initial; items0.value = [] }
  return { count: count0, items: items0, grouped, label, bump, reset }
}
