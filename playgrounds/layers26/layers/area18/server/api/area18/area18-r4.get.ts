export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 19))
  return { id: query.id ?? null, rows: area18Rows(limit), generatedBy: 'area18/r4' }
})
