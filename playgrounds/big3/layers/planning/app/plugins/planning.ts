export default defineNuxtPlugin(() => {
  return { provide: { planningVersion: () => '5.16.0' } }
})
