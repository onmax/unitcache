export function useAuditState4 (initial = 8) {
  const count = useState<number>('audit-state-4', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-4', () => [])
  const grouped = computed(() => groupAudit2(items.value))
  const label = computed(() => formatAudit2(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
