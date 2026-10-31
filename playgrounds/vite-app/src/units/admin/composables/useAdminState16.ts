const count16 = ref(1)
const items16 = shallowRef<{ id: string, status: string, value: number }[]>([])

export function useAdminState16 (initial = 9) {
  const grouped = computed(() => groupAdmin11(items16.value))
  const label = computed(() => formatAdmin11(count16.value, { precision: 1 }))
  function bump (by = 1) { count16.value += by }
  function reset () { count16.value = initial; items16.value = [] }
  return { count: count16, items: items16, grouped, label, bump, reset }
}
