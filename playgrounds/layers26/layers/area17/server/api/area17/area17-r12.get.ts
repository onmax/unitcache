export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 42))
  return { id: query.id ?? null, rows: area17Rows(limit), generatedBy: 'area17/r12' }
})
