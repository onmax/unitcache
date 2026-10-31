<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState18()
useHead({ title: `Inventory 17 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p17">
    <h1>Inventory page 17 ({{ count }})</h1>
    <InventoryWidget134 title="InventoryWidget134" />
    <InventoryWidget242 title="InventoryWidget242" />
    <InventoryWidget83 title="InventoryWidget83" />
    <InventoryWidget157 title="InventoryWidget157" />
    <InventoryWidget168 title="InventoryWidget168" />
    <InventoryWidget11 title="InventoryWidget11" />
  </div>
</template>
