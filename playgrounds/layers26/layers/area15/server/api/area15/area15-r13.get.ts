export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 23))
  return { id: query.id ?? null, rows: area15Rows(limit), generatedBy: 'area15/r13' }
})
