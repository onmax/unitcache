export default defineNuxtPlugin(() => {
  return { provide: { dashboardVersion: () => '1.17.0' } }
})
