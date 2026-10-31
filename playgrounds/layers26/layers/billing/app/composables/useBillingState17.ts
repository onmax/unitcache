export function useBillingState17 (initial = 8) {
  const count = useState<number>('billing-state-17', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-17', () => [])
  const grouped = computed(() => groupBilling1(items.value))
  const label = computed(() => formatBilling1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
