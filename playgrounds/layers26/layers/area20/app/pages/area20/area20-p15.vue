<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State24()
useHead({ title: `Area20 15 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p15">
    <h1>Area20 page 15 ({{ count }})</h1>
    <Area20Widget219 title="Area20Widget219" />
    <Area20Widget97 title="Area20Widget97" />
    <Area20Widget170 title="Area20Widget170" />
    <Area20Widget81 title="Area20Widget81" />
    <Area20Widget190 title="Area20Widget190" />
  </div>
</template>
