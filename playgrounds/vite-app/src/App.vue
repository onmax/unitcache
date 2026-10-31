<script setup lang="ts">
import UiLayout from '@va/ui/layouts/UiLayout.vue'
</script>

<template>
  <UiLayout>
    <template #nav>
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/dashboard">dashboard</RouterLink>
      <RouterLink to="/alarms">alarms</RouterLink>
      <RouterLink to="/kpis">kpis</RouterLink>
      <RouterLink to="/reports">reports</RouterLink>
      <RouterLink to="/admin">admin</RouterLink>
      <RouterLink to="/settings">settings</RouterLink>
    </template>
    <RouterView />
  </UiLayout>
</template>
