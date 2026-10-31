<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState15()
useHead({ title: `Inventory 18 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p18">
    <h1>Inventory page 18 ({{ count }})</h1>
    <InventoryWidget214 title="InventoryWidget214" />
    <InventoryWidget27 title="InventoryWidget27" />
    <InventoryWidget247 title="InventoryWidget247" />
    <InventoryWidget9 title="InventoryWidget9" />
    <InventoryWidget71 title="InventoryWidget71" />
    <InventoryWidget246 title="InventoryWidget246" />
  </div>
</template>
