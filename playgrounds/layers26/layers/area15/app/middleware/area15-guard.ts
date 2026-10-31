export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'area15') return navigateTo('/')
})
