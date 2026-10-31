export function useBillingState1 (initial = 2) {
  const count = useState<number>('billing-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-1', () => [])
  const grouped = computed(() => groupBilling0(items.value))
  const label = computed(() => formatBilling0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
