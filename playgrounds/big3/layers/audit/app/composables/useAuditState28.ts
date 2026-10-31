export function useAuditState28 (initial = 3) {
  const count = useState<number>('audit-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-28', () => [])
  const grouped = computed(() => groupAudit9(items.value))
  const label = computed(() => formatAudit9(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
