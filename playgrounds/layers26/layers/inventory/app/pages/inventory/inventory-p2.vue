<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState15()
useHead({ title: `Inventory 2 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p2">
    <h1>Inventory page 2 ({{ count }})</h1>
    <InventoryWidget42 title="InventoryWidget42" />
    <InventoryWidget22 title="InventoryWidget22" />
    <InventoryWidget228 title="InventoryWidget228" />
    <InventoryWidget162 title="InventoryWidget162" />
    <InventoryWidget126 title="InventoryWidget126" />
  </div>
</template>
