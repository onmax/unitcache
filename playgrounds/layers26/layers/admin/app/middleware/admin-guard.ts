export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'admin') return navigateTo('/')
})
