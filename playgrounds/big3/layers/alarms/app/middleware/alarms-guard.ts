export default defineNuxtRouteMiddleware((to) => {
  if (to.query.denied === 'alarms') return navigateTo('/')
})
