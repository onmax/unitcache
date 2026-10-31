export function useBillingState2 (initial = 6) {
  const count = useState<number>('billing-state-2', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-2', () => [])
  const grouped = computed(() => groupBilling4(items.value))
  const label = computed(() => formatBilling4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
