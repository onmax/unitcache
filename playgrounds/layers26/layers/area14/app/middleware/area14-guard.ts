export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'area14') return navigateTo('/')
})
