<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State22()
useHead({ title: `Area16 5 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p5">
    <h1>Area16 page 5 ({{ count }})</h1>
    <Area16Widget103 title="Area16Widget103" />
    <Area16Widget223 title="Area16Widget223" />
    <Area16Widget69 title="Area16Widget69" />
    <Area16Widget26 title="Area16Widget26" />
  </div>
</template>
