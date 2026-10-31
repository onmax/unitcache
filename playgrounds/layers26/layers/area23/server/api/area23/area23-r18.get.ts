export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 17))
  return { id: query.id ?? null, rows: area23Rows(limit), generatedBy: 'area23/r18' }
})
