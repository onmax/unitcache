export function useAuditState15 (initial = 7) {
  const count = useState<number>('audit-state-15', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-15', () => [])
  const grouped = computed(() => groupAudit8(items.value))
  const label = computed(() => formatAudit8(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
