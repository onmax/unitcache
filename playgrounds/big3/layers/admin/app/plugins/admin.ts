export default defineNuxtPlugin(() => {
  return { provide: { adminVersion: () => '9.17.0' } }
})
