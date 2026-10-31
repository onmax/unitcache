export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'area24') return navigateTo('/')
})
