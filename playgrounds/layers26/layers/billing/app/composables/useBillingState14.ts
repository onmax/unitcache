export function useBillingState14 (initial = 2) {
  const count = useState<number>('billing-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-14', () => [])
  const grouped = computed(() => groupBilling6(items.value))
  const label = computed(() => formatBilling6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
