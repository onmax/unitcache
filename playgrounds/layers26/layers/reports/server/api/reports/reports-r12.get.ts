export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 19))
  return { id: query.id ?? null, rows: reportsRows(limit), generatedBy: 'reports/r12' }
})
