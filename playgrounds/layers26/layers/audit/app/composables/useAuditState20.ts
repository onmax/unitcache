export function useAuditState20 (initial = 3) {
  const count = useState<number>('audit-state-20', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-20', () => [])
  const grouped = computed(() => groupAudit11(items.value))
  const label = computed(() => formatAudit11(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
