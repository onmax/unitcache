export function useBillingState11 (initial = 5) {
  const count = useState<number>('billing-state-11', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-11', () => [])
  const grouped = computed(() => groupBilling15(items.value))
  const label = computed(() => formatBilling15(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
