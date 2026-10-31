export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 40))
  return { id: query.id ?? null, rows: area24Rows(limit), generatedBy: 'area24/r7' }
})
