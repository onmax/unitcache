export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 30))
  return { id: query.id ?? null, rows: kpisRows(limit), generatedBy: 'kpis/r20' }
})
