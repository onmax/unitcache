<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State28()
useHead({ title: `Area20 8 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p8">
    <h1>Area20 page 8 ({{ count }})</h1>
    <Area20Widget91 title="Area20Widget91" />
    <Area20Widget225 title="Area20Widget225" />
    <Area20Widget55 title="Area20Widget55" />
    <Area20Widget102 title="Area20Widget102" />
    <Area20Widget51 title="Area20Widget51" />
    <Area20Widget145 title="Area20Widget145" />
  </div>
</template>
