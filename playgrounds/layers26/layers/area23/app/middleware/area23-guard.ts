export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'area23') return navigateTo('/')
})
