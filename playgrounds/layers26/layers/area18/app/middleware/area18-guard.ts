export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'area18') return navigateTo('/')
})
