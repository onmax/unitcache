<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State14()
useHead({ title: `Area20 7 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p7">
    <h1>Area20 page 7 ({{ count }})</h1>
    <Area20Widget121 title="Area20Widget121" />
    <Area20Widget27 title="Area20Widget27" />
    <Area20Widget165 title="Area20Widget165" />
    <Area20Widget249 title="Area20Widget249" />
    <Area20Widget187 title="Area20Widget187" />
    <Area20Widget84 title="Area20Widget84" />
  </div>
</template>
