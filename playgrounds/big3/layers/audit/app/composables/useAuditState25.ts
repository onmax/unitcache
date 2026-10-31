export function useAuditState25 (initial = 2) {
  const count = useState<number>('audit-state-25', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-25', () => [])
  const grouped = computed(() => groupAudit6(items.value))
  const label = computed(() => formatAudit6(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
