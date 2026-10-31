export function useAuditState23 (initial = 8) {
  const count = useState<number>('audit-state-23', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-23', () => [])
  const grouped = computed(() => groupAudit0(items.value))
  const label = computed(() => formatAudit0(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
