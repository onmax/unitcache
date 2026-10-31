export function useAuditState21 (initial = 9) {
  const count = useState<number>('audit-state-21', () => initial)
  const items = useState<{ id: string, status: string, value: number }[]>('audit-items-21', () => [])
  const grouped = computed(() => groupAudit3(items.value))
  const label = computed(() => formatAudit3(count.value, { precision: 1 }))
  function bump (by = 1) { count.value += by }
  function reset () { count.value = initial; items.value = [] }
  return { count, items, grouped, label, bump, reset }
}
