<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState13()
useHead({ title: `Inventory 0 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p0">
    <h1>Inventory page 0 ({{ count }})</h1>
    <InventoryWidget64 title="InventoryWidget64" />
    <InventoryWidget147 title="InventoryWidget147" />
    <InventoryWidget240 title="InventoryWidget240" />
    <InventoryWidget86 title="InventoryWidget86" />
  </div>
</template>
