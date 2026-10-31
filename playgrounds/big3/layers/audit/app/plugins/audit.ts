export default defineNuxtPlugin(() => {
  return { provide: { auditVersion: () => '5.17.0' } }
})
