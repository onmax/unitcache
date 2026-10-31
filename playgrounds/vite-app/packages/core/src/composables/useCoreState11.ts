const count11 = ref(0)
const items11 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useCoreState11 (initial = 7) {
  const grouped = computed(() => groupCore5(items11.value))
  const label = computed(() => formatCore5(count11.value, { precision: 1 }))
  function bump (by = 1) { count11.value += by }
  function reset () { count11.value = initial; items11.value = [] }
  return { count: count11, items: items11, grouped, label, bump, reset }
}
