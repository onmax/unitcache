export function useBillingState9 (initial = 6) {
  const count = useState<number>('billing-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-9', () => [])
  const grouped = computed(() => groupBilling2(items.value))
  const label = computed(() => formatBilling2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
