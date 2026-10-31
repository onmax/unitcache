<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State27()
useHead({ title: `Area18 7 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p7">
    <h1>Area18 page 7 ({{ count }})</h1>
    <Area18Widget45 title="Area18Widget45" />
    <Area18Widget191 title="Area18Widget191" />
    <Area18Widget114 title="Area18Widget114" />
    <Area18Widget81 title="Area18Widget81" />
    <Area18Widget226 title="Area18Widget226" />
    <Area18Widget208 title="Area18Widget208" />
  </div>
</template>
