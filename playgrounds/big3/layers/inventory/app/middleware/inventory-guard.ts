export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'inventory') return navigateTo('/')
})
