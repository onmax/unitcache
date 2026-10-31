const count16 = ref(0)
const items16 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useCoreState16 (initial = 8) {
  const grouped = computed(() => groupCore7(items16.value))
  const label = computed(() => formatCore7(count16.value, { precision: 1 }))
  function bump (by = 1) { count16.value += by }
  function reset () { count16.value = initial; items16.value = [] }
  return { count: count16, items: items16, grouped, label, bump, reset }
}
