<script setup lang="ts">
definePageMeta({ layout: 'default', middleware: ['inventory-guard'] })
const route = useRoute()
const { count } = useInventoryState22()
useHead({ title: `Inventory 7 ${route.params.inventoryId ?? ''}` })
</script>

<template>
  <div class="page inventory-p7">
    <h1>Inventory page 7 ({{ count }})</h1>
    <InventoryWidget210 title="InventoryWidget210" />
    <InventoryWidget182 title="InventoryWidget182" />
    <InventoryWidget131 title="InventoryWidget131" />
    <InventoryWidget103 title="InventoryWidget103" />
    <InventoryWidget212 title="InventoryWidget212" />
  </div>
</template>
