export default defineEventHandler((event) => {
  const query = getQuery(event)
  const limit = Math.min(100, Number(query.limit ?? 44))
  return { id: query.id ?? null, rows: settingsRows(limit), generatedBy: 'settings/r18' }
})
