<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State12()
useHead({ title: `Area18 5 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p5">
    <h1>Area18 page 5 ({{ count }})</h1>
    <Area18Widget77 title="Area18Widget77" />
    <Area18Widget9 title="Area18Widget9" />
    <Area18Widget106 title="Area18Widget106" />
    <Area18Widget144 title="Area18Widget144" />
  </div>
</template>
