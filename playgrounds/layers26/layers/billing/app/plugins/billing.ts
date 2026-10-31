export default defineNuxtPlugin(() => {
  return { provide: { billingVersion: () => '7.12.0' } }
})
