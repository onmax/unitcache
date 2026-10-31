export function useAuditState1 (initial = 6) {
  const count = useState<number>('audit-state-1', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-1', () => [])
  const grouped = computed(() => groupAudit5(items.value))
  const label = computed(() => formatAudit5(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
