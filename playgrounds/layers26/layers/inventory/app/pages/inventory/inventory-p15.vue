<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState9()
useHead({ title: `Inventory 15 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p15">
    <h1>Inventory page 15 ({{ count }})</h1>
    <InventoryWidget223 title="InventoryWidget223" />
    <InventoryWidget147 title="InventoryWidget147" />
    <InventoryWidget169 title="InventoryWidget169" />
    <InventoryWidget17 title="InventoryWidget17" />
    <InventoryWidget9 title="InventoryWidget9" />
    <InventoryWidget136 title="InventoryWidget136" />
  </div>
</template>
