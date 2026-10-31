export default defineNuxtPlugin(() => {
  return { provide: { inventoryVersion: () => '9.5.0' } }
})
