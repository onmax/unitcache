export function useAuditState28 (initial = 0) {
  const count = useState<number>('audit-state-28', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-28', () => [])
  const grouped = computed(() => groupAudit12(items.value))
  const label = computed(() => formatAudit12(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
