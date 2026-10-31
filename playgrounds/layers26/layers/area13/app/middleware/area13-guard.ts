export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'area13') return navigateTo('/')
})
