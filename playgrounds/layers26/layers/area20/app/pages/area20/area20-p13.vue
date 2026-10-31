<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State12()
useHead({ title: `Area20 13 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p13">
    <h1>Area20 page 13 ({{ count }})</h1>
    <Area20Widget156 title="Area20Widget156" />
    <Area20Widget155 title="Area20Widget155" />
    <Area20Widget104 title="Area20Widget104" />
    <Area20Widget66 title="Area20Widget66" />
    <Area20Widget7 title="Area20Widget7" />
    <Area20Widget123 title="Area20Widget123" />
  </div>
</template>
