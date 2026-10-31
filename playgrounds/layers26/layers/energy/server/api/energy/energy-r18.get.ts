export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 29))
  return { id: query.id ?? null, rows: energyRows(limit), generatedBy: 'energy/r18' }
})
