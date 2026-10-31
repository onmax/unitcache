<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['area20-guard'] })
const route = useRoute()
const { count } = useArea20State2()
useHead({ title: `Area20 16 ${route.params.area20Id ?? ''}` })
</script>

<template>
  <div class="page area20-p16">
    <h1>Area20 page 16 ({{ count }})</h1>
    <Area20Widget170 title="Area20Widget170" />
    <Area20Widget232 title="Area20Widget232" />
    <Area20Widget61 title="Area20Widget61" />
    <Area20Widget77 title="Area20Widget77" />
    <Area20Widget187 title="Area20Widget187" />
  </div>
</template>
