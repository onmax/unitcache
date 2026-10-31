<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State29()
useHead({ title: `Area20 19 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p19">
    <h1>Area20 page 19 ({{ count }})</h1>
    <Area20Widget96 title="Area20Widget96" />
    <Area20Widget99 title="Area20Widget99" />
    <Area20Widget132 title="Area20Widget132" />
  </div>
</template>
