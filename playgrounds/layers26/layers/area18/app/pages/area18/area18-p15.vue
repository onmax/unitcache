<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State0()
useHead({ title: `Area18 15 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p15">
    <h1>Area18 page 15 ({{ count }})</h1>
    <Area18Widget58 title="Area18Widget58" />
    <Area18Widget103 title="Area18Widget103" />
    <Area18Widget99 title="Area18Widget99" />
    <Area18Widget155 title="Area18Widget155" />
    <Area18Widget154 title="Area18Widget154" />
    <Area18Widget181 title="Area18Widget181" />
  </div>
</template>
