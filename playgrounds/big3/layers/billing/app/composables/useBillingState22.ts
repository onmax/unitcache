export function useBillingState22 (initial = 8) {
  const count = useState<number>('billing-state-22', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-22', () => [])
  const grouped = computed(() => groupBilling3(items.value))
  const label = computed(() => formatBilling3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
