export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'settings') return navigateTo('/')
})
