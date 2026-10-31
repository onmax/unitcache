export default defineNuxtPlugin(() => {
  return { provide: { energyVersion: () => '5.10.0' } }
})
