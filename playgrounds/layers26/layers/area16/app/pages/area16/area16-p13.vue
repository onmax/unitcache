<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area16-guard'] })
const route = useRoute()
const { count } = useArea16State3()
useHead({ title: `Area16 13 ${route.params.area16Id ?? ''}` })
</script>

<template>
  <div class="page area16-p13">
    <h1>Area16 page 13 ({{ count }})</h1>
    <Area16Widget245 title="Area16Widget245" />
    <Area16Widget158 title="Area16Widget158" />
    <Area16Widget223 title="Area16Widget223" />
    <Area16Widget46 title="Area16Widget46" />
  </div>
</template>
