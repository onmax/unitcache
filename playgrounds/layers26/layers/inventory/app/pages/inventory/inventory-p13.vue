<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState4()
useHead({ title: `Inventory 13 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p13">
    <h1>Inventory page 13 ({{ count }})</h1>
    <InventoryWidget167 title="InventoryWidget167" />
    <InventoryWidget17 title="InventoryWidget17" />
    <InventoryWidget39 title="InventoryWidget39" />
    <InventoryWidget2 title="InventoryWidget2" />
  </div>
</template>
