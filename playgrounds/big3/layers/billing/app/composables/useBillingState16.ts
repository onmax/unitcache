export function useBillingState16 (initial = 2) {
  const count = useState<number>('billing-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('billing-items-16', () => [])
  const grouped = computed(() => groupBilling15(items.value))
  const label = computed(() => formatBilling15(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
