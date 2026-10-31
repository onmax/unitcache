export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'area17') return navigateTo('/')
})
