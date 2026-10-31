export function useBillingState23 (initial = 6) {
  const count = useState<number>('billing-state-23', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-23', () => [])
  const grouped = computed(() => groupBilling5(items.value))
  const label = computed(() => formatBilling5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
