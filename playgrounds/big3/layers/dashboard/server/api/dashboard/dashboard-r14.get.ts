export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 24))
  return { id: query.id ?? null, rows: dashboardRows(limit), generatedBy: 'dashboard/r14' }
})
