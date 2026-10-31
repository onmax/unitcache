export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 37))
  return { id: query.id ?? null, rows: area20Rows(limit), generatedBy: 'area20/r7' }
})
