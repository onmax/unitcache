<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState23()
useHead({ title: `Inventory 16 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p16">
    <h1>Inventory page 16 ({{ count }})</h1>
    <InventoryWidget42 title="InventoryWidget42" />
    <InventoryWidget136 title="InventoryWidget136" />
    <InventoryWidget197 title="InventoryWidget197" />
    <InventoryWidget58 title="InventoryWidget58" />
    <InventoryWidget161 title="InventoryWidget161" />
  </div>
</template>
