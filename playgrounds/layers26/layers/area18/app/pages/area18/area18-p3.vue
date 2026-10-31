<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State1()
useHead({ title: `Area18 3 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p3">
    <h1>Area18 page 3 ({{ count }})</h1>
    <Area18Widget34 title="Area18Widget34" />
    <Area18Widget99 title="Area18Widget99" />
    <Area18Widget4 title="Area18Widget4" />
  </div>
</template>
