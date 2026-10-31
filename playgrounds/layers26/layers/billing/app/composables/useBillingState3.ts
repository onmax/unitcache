export function useBillingState3 (initial = 8) {
  const count = useState<number>('billing-state-3', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-3', () => [])
  const grouped = computed(() => groupBilling2(items.value))
  const label = computed(() => formatBilling2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
