export default defineNuxtPlugin(() => {
  return { provide: { inventoryVersion: () => '4.0.0' } }
})
