export function useAuditState16 (initial = 3) {
  const count = useState<number>('audit-state-16', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-16', () => [])
  const grouped = computed(() => groupAudit4(items.value))
  const label = computed(() => formatAudit4(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
