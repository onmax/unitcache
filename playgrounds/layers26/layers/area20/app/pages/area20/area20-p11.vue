<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State8()
useHead({ title: `Area20 11 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p11">
    <h1>Area20 page 11 ({{ count }})</h1>
    <Area20Widget166 title="Area20Widget166" />
    <Area20Widget58 title="Area20Widget58" />
    <Area20Widget198 title="Area20Widget198" />
    <Area20Widget140 title="Area20Widget140" />
  </div>
</template>
