export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 16))
  return { id: query.id ?? null, rows: area22Rows(limit), generatedBy: 'area22/r2' }
})
