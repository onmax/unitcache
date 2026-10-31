export function useBillingState17 (initial = 7) {
  const count = useState<number>('billing-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-17', () => [])
  const grouped = computed(() => groupBilling11(items.value))
  const label = computed(() => formatBilling11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
