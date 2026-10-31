export function useBillingState18 (initial = 4) {
  const count = useState<number>('billing-state-18', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-18', () => [])
  const grouped = computed(() => groupBilling11(items.value))
  const label = computed(() => formatBilling11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
