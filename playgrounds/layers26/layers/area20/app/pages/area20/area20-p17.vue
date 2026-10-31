<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State11()
useHead({ title: `Area20 17 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p17">
    <h1>Area20 page 17 ({{ count }})</h1>
    <Area20Widget75 title="Area20Widget75" />
    <Area20Widget31 title="Area20Widget31" />
    <Area20Widget156 title="Area20Widget156" />
    <Area20Widget11 title="Area20Widget11" />
  </div>
</template>
