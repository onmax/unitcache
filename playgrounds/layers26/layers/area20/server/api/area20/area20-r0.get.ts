export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 18))
  return { id: query.id ?? null, rows: area20Rows(limit), generatedBy: 'area20/r0' }
})
