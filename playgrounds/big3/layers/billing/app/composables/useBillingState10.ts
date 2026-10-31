export function useBillingState10 (initial = 9) {
  const count = useState<number>('billing-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-10', () => [])
  const grouped = computed(() => groupBilling9(items.value))
  const label = computed(() => formatBilling9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
