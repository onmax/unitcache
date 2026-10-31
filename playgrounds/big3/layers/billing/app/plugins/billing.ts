export default defineNuxtPlugin(() => {
  return { provide: { billingVersion: () => '5.3.0' } }
})
