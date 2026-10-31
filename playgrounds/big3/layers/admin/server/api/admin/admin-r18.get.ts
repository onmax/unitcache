export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 37))
  return { id: query.id ?? null, rows: adminRows(limit), generatedBy: 'admin/r18' }
})
