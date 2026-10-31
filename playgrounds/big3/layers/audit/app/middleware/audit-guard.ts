export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'audit') return navigateTo('/')
})
