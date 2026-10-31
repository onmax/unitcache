export function useAuditState5 (initial = 3) {
  const count = useState<number>('audit-state-5', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-5', () => [])
  const grouped = computed(() => groupAudit13(items.value))
  const label = computed(() => formatAudit13(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
