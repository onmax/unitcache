export function useBillingState27 (initial = 5) {
  const count = useState<number>('billing-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-27', () => [])
  const grouped = computed(() => groupBilling4(items.value))
  const label = computed(() => formatBilling4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
