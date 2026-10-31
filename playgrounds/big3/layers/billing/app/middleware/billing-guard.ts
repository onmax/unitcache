export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'billing') return navigateTo('/')
})
