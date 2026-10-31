export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'reports') return navigateTo('/')
})
