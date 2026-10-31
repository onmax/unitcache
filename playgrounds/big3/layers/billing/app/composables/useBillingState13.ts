export function useBillingState13 (initial = 1) {
  const count = useState<number>('billing-state-13', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-13', () => [])
  const grouped = computed(() => groupBilling13(items.value))
  const label = computed(() => formatBilling13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
