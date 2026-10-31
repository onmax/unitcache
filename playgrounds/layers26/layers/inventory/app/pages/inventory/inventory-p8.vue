<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState4()
useHead({ title: `Inventory 8 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p8">
    <h1>Inventory page 8 ({{ count }})</h1>
    <InventoryWidget145 title="InventoryWidget145" />
    <InventoryWidget11 title="InventoryWidget11" />
    <InventoryWidget9 title="InventoryWidget9" />
    <InventoryWidget179 title="InventoryWidget179" />
  </div>
</template>
