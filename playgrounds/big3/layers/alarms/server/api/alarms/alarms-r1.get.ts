export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 46))
  return { id: query.id ?? null, rows: alarmsRows(limit), generatedBy: 'alarms/r1' }
})
