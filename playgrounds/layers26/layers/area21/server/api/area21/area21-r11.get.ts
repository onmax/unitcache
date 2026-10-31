export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 14))
  return { id: query.id ?? null, rows: area21Rows(limit), generatedBy: 'area21/r11' }
})
