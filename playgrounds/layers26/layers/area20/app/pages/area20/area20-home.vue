<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State19()
useHead({ title: `Area20 0 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p0">
    <h1>Area20 page 0 ({{ count }})</h1>
    <Area20Widget208 title="Area20Widget208" />
    <Area20Widget201 title="Area20Widget201" />
    <Area20Widget188 title="Area20Widget188" />
    <Area20Widget76 title="Area20Widget76" />
    <Area20Widget53 title="Area20Widget53" />
  </div>
</template>
