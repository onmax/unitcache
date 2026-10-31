export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'area22') return navigateTo('/')
})
