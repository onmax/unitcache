export function useAuditState14 (initial = 6) {
  const count = useState<number>('audit-state-14', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-14', () => [])
  const grouped = computed(() => groupAudit10(items.value))
  const label = computed(() => formatAudit10(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
