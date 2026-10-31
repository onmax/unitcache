export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 10))
  return { id: query.id ?? null, rows: area16Rows(limit), generatedBy: 'area16/r20' }
})
