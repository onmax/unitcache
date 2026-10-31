export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 12))
  return { id: query.id ?? null, rows: inventoryRows(limit), generatedBy: 'inventory/r18' }
})
