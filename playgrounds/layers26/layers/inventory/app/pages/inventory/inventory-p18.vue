<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState29()
useHead({ title: `Inventory 18 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p18">
    <h1>Inventory page 18 ({{ count }})</h1>
    <InventoryWidget141 title="InventoryWidget141" />
    <InventoryWidget142 title="InventoryWidget142" />
    <InventoryWidget107 title="InventoryWidget107" />
    <InventoryWidget156 title="InventoryWidget156" />
    <InventoryWidget202 title="InventoryWidget202" />
  </div>
</template>
