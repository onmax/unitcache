export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'planning') return navigateTo('/')
})
