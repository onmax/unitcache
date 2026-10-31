export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'area21') return navigateTo('/')
})
