export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 21))
  return { id: query.id ?? null, rows: billingRows(limit), generatedBy: 'billing/r18' }
})
