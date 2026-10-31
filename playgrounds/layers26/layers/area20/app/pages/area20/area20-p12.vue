<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State10()
useHead({ title: `Area20 12 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p12">
    <h1>Area20 page 12 ({{ count }})</h1>
    <Area20Widget7 title="Area20Widget7" />
    <Area20Widget26 title="Area20Widget26" />
    <Area20Widget95 title="Area20Widget95" />
    <Area20Widget152 title="Area20Widget152" />
  </div>
</template>
