export default defineNuxtPlugin(() => {
  return { provide: { alarmsVersion: () => '3.11.0' } }
})
