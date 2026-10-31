export default defineNuxtPlugin(() => {
  return { provide: { adminVersion: () => '4.11.0' } }
})
