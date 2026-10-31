export function useAuditState10 (initial = 9) {
  const count = useState<number>('audit-state-10', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-10', () => [])
  const grouped = computed(() => groupAudit8(items.value))
  const label = computed(() => formatAudit8(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
