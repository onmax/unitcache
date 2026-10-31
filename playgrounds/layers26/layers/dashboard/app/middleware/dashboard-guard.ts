export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'dashboard') return navigateTo('/')
})
