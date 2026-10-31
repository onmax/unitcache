<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State11()
useHead({ title: `Area18 4 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p4">
    <h1>Area18 page 4 ({{ count }})</h1>
    <Area18Widget215 title="Area18Widget215" />
    <Area18Widget122 title="Area18Widget122" />
    <Area18Widget69 title="Area18Widget69" />
    <Area18Widget16 title="Area18Widget16" />
    <Area18Widget126 title="Area18Widget126" />
    <Area18Widget234 title="Area18Widget234" />
  </div>
</template>
