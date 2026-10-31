<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area18-guard'] })
const route = useRoute()
const { count } = useArea18State2()
useHead({ title: `Area18 8 ${route.params.area18Id ?? ''}` })
</script>

<template>
  <div class="page area18-p8">
    <h1>Area18 page 8 ({{ count }})</h1>
    <Area18Widget178 title="Area18Widget178" />
    <Area18Widget213 title="Area18Widget213" />
    <Area18Widget229 title="Area18Widget229" />
    <Area18Widget37 title="Area18Widget37" />
    <Area18Widget100 title="Area18Widget100" />
    <Area18Widget69 title="Area18Widget69" />
  </div>
</template>
