export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'kpis') return navigateTo('/')
})
