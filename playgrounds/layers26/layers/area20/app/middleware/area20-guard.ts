export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'area20') return navigateTo('/')
})
