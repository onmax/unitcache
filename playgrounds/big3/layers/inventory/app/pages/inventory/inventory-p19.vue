<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState13()
useHead({ title: `Inventory 19 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p19">
    <h1>Inventory page 19 ({{ count }})</h1>
    <InventoryWidget174 title="InventoryWidget174" />
    <InventoryWidget171 title="InventoryWidget171" />
    <InventoryWidget149 title="InventoryWidget149" />
    <InventoryWidget216 title="InventoryWidget216" />
    <InventoryWidget46 title="InventoryWidget46" />
  </div>
</template>
