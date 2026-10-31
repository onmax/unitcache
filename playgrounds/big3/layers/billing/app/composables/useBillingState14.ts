export function useBillingState14 (initial = 6) {
  const count = useState<number>('billing-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-14', () => [])
  const grouped = computed(() => groupBilling14(items.value))
  const label = computed(() => formatBilling14(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
