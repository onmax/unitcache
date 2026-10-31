export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'area19') return navigateTo('/')
})
