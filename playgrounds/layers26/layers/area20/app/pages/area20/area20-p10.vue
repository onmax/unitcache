<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State5()
useHead({ title: `Area20 10 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p10">
    <h1>Area20 page 10 ({{ count }})</h1>
    <Area20Widget65 title="Area20Widget65" />
    <Area20Widget182 title="Area20Widget182" />
    <Area20Widget202 title="Area20Widget202" />
    <Area20Widget193 title="Area20Widget193" />
    <Area20Widget89 title="Area20Widget89" />
    <Area20Widget86 title="Area20Widget86" />
  </div>
</template>
