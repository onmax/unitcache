<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState20()
useHead({ title: `Inventory 10 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p10">
    <h1>Inventory page 10 ({{ count }})</h1>
    <InventoryWidget22 title="InventoryWidget22" />
    <InventoryWidget210 title="InventoryWidget210" />
    <InventoryWidget34 title="InventoryWidget34" />
    <InventoryWidget9 title="InventoryWidget9" />
    <InventoryWidget206 title="InventoryWidget206" />
  </div>
</template>
