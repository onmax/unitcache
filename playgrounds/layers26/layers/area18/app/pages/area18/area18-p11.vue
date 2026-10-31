<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State21()
useHead({ title: `Area18 11 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p11">
    <h1>Area18 page 11 ({{ count }})</h1>
    <Area18Widget104 title="Area18Widget104" />
    <Area18Widget169 title="Area18Widget169" />
    <Area18Widget172 title="Area18Widget172" />
  </div>
</template>
