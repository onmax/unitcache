export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 41))
  return { id: query.id ?? null, rows: area13Rows(limit), generatedBy: 'area13/r4' }
})
