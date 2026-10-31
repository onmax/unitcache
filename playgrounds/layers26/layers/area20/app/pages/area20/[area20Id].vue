<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State2()
useHead({ title: `Area20 1 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p1">
    <h1>Area20 page 1 ({{ count }})</h1>
    <Area20Widget126 title="Area20Widget126" />
    <Area20Widget158 title="Area20Widget158" />
    <Area20Widget241 title="Area20Widget241" />
    <Area20Widget154 title="Area20Widget154" />
    <Area20Widget190 title="Area20Widget190" />
    <Area20Widget151 title="Area20Widget151" />
  </div>
</template>
