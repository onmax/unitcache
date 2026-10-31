export function useAuditState9 (initial = 2) {
  const count = useState<number>('audit-state-9', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-9', () => [])
  const grouped = computed(() => groupAudit11(items.value))
  const label = computed(() => formatAudit11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
