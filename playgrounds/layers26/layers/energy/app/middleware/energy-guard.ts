export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'energy') return navigateTo('/')
})
