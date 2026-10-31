export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'quality') return navigateTo('/')
})
