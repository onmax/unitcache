export function useBillingState29 (initial = 4) {
  const count = useState<number>('billing-state-29', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-29', () => [])
  const grouped = computed(() => groupBilling5(items.value))
  const label = computed(() => formatBilling5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
