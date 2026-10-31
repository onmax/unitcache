<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area23-guard'] })
const route = useRoute()
const { count } = useArea23State10()
useHead({ title: `Area23 19 ${route.params.area23Id ?? ''}` })
</script>

<template>
  <div class="page area23-p19">
    <h1>Area23 page 19 ({{ count }})</h1>
    <Area23Widget121 title="Area23Widget121" />
    <Area23Widget48 title="Area23Widget48" />
    <Area23Widget159 title="Area23Widget159" />
  </div>
</template>
