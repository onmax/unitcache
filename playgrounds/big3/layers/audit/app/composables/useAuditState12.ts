export function useAuditState12 (initial = 5) {
  const count = useState<number>('audit-state-12', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-12', () => [])
  const grouped = computed(() => groupAudit4(items.value))
  const label = computed(() => formatAudit4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
