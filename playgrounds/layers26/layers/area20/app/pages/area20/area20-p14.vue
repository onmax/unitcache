<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State15()
useHead({ title: `Area20 14 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p14">
    <h1>Area20 page 14 ({{ count }})</h1>
    <Area20Widget135 title="Area20Widget135" />
    <Area20Widget50 title="Area20Widget50" />
    <Area20Widget227 title="Area20Widget227" />
    <Area20Widget3 title="Area20Widget3" />
    <Area20Widget244 title="Area20Widget244" />
    <Area20Widget107 title="Area20Widget107" />
  </div>
</template>
