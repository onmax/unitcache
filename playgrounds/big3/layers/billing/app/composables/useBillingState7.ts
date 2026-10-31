export function useBillingState7 (initial = 8) {
  const count = useState<number>('billing-state-7', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-7', () => [])
  const grouped = computed(() => groupBilling6(items.value))
  const label = computed(() => formatBilling6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
