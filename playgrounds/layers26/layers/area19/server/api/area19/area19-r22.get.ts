export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 35))
  return { id: query.id ?? null, rows: area19Rows(limit), generatedBy: 'area19/r22' }
})
