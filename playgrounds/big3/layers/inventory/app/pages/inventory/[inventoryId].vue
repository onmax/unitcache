<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState29()
useHead({ title: `Inventory 1 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p1">
    <h1>Inventory page 1 ({{ count }})</h1>
    <InventoryWidget74 title="InventoryWidget74" />
    <InventoryWidget141 title="InventoryWidget141" />
    <InventoryWidget243 title="InventoryWidget243" />
    <InventoryWidget122 title="InventoryWidget122" />
    <InventoryWidget24 title="InventoryWidget24" />
  </div>
</template>
