export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'area16') return navigateTo('/')
})
