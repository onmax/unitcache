<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State15()
useHead({ title: `Area20 6 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p6">
    <h1>Area20 page 6 ({{ count }})</h1>
    <Area20Widget167 title="Area20Widget167" />
    <Area20Widget84 title="Area20Widget84" />
    <Area20Widget217 title="Area20Widget217" />
    <Area20Widget141 title="Area20Widget141" />
  </div>
</template>
