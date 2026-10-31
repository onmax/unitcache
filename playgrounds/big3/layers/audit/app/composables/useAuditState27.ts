export function useAuditState27 (initial = 1) {
  const count = useState<number>('audit-state-27', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-27', () => [])
  const grouped = computed(() => groupAudit1(items.value))
  const label = computed(() => formatAudit1(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
