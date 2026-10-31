export function useBillingState19 (initial = 5) {
  const count = useState<number>('billing-state-19', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-19', () => [])
  const grouped = computed(() => groupBilling11(items.value))
  const label = computed(() => formatBilling11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
