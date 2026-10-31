<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State20()
useHead({ title: `Area18 12 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p12">
    <h1>Area18 page 12 ({{ count }})</h1>
    <Area18Widget33 title="Area18Widget33" />
    <Area18Widget138 title="Area18Widget138" />
    <Area18Widget27 title="Area18Widget27" />
    <Area18Widget178 title="Area18Widget178" />
    <Area18Widget246 title="Area18Widget246" />
    <Area18Widget242 title="Area18Widget242" />
  </div>
</template>
