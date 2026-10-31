export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 28))
  return { id: query.id ?? null, rows: qualityRows(limit), generatedBy: 'quality/r19' }
})
