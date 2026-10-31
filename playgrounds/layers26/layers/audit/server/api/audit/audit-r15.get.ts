export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 9))
  return { id: query.id ?? null, rows: auditRows(limit), generatedBy: 'audit/r15' }
})
