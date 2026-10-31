export function useBillingState4 (initial = 0) {
  const count = useState<number>('billing-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-4', () => [])
  const grouped = computed(() => groupBilling4(items.value))
  const label = computed(() => formatBilling4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
