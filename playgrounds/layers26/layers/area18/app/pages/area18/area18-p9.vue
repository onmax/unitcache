<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State19()
useHead({ title: `Area18 9 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p9">
    <h1>Area18 page 9 ({{ count }})</h1>
    <Area18Widget104 title="Area18Widget104" />
    <Area18Widget232 title="Area18Widget232" />
    <Area18Widget99 title="Area18Widget99" />
  </div>
</template>
