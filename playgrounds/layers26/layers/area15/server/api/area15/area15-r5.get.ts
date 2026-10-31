export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 43))
  return { id: query.id ?? null, rows: area15Rows(limit), generatedBy: 'area15/r5' }
})
