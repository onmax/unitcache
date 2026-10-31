<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State9()
useHead({ title: `Area18 19 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p19">
    <h1>Area18 page 19 ({{ count }})</h1>
    <Area18Widget150 title="Area18Widget150" />
    <Area18Widget96 title="Area18Widget96" />
    <Area18Widget242 title="Area18Widget242" />
  </div>
</template>
