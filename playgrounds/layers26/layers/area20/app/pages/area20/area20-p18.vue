<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State1()
useHead({ title: `Area20 18 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p18">
    <h1>Area20 page 18 ({{ count }})</h1>
    <Area20Widget240 title="Area20Widget240" />
    <Area20Widget102 title="Area20Widget102" />
    <Area20Widget114 title="Area20Widget114" />
    <Area20Widget153 title="Area20Widget153" />
    <Area20Widget228 title="Area20Widget228" />
  </div>
</template>
