<script setup>
// Set by `vite.define` from DEPLOY_FLAVOR (lab.config.ts), so an env change reaches the output.
const flavor = __DEPLOY_FLAVOR__
</script>

<template>
  <NuxtLayout :data-flavor="flavor">
    <NuxtPage />
  </NuxtLayout>
</template>
