export default defineNuxtPlugin(() => {
  return { provide: { auditVersion: () => '1.10.0' } }
})
